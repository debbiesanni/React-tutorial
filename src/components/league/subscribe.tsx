import Button from '../button';
import { auth, postContent, session, deleteServerData } from 'utils';
import useForm from '../../hooks/useForm';
import Toast from '../shared/toast';
import Loading from '../shared/isLoading';
import { useState } from 'react';
import { UserProps } from 'redux/slice/user';
import Dialog from '../dialog';
import useDialog from '../../hooks/useDialog';

interface Props {
    className?: string;
    id: string;
    user: UserProps;
    centreId: string;
    referralCode?: string;
}
export default function Subscribe({
    className,
    id,
    user,
    centreId,
    referralCode,
}: Props) {
    const createForm = useForm(submit);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { closeDialog, openDialog, isOpen } = useDialog();
    user = user || (session.get('user') as unknown as UserProps);
    const leagueSubscriber = user?.joinedLeagues;
    async function exitLeague() {
        setMessage('');
        try {
            setIsLoading(true);
            const { message } = await deleteServerData({
                url: `/centre/${centreId}/league/${id}/exit`,
            });
            const index = leagueSubscriber.indexOf(id);
            leagueSubscriber.splice(index, 1);
            session.set('user', user);
            setMessage(message);
            closeDialog();
            setIsLoading(false);
        } catch ({ message }) {
            setMessage(message);
            closeDialog();
            setIsLoading(false);
        }
    }
    async function submit() {
        setMessage('');
        try {
            if (auth.hasJoinedLeague(id, user?.joinedLeagues)) {
                openDialog();
            } else {
                setIsLoading(true);
                const url = `/centre/${centreId}/league/${id}/candidate`;
                const { message } = await postContent({
                    url: referralCode
                        ? `${url}?referralCode=${referralCode}`
                        : url,
                });
                leagueSubscriber.push(id);
                session.set('user', user);
                setMessage(message);
                setIsLoading(false);
            }
        } catch ({ message }) {
            setMessage(message);
            setIsLoading(false);
        }
    }
    const value = <>Exit League {isLoading && <Loading />} </>;
    return (
        <>
            <Button
                style={{ borderRadius: 0 }}
                className={className}
                color="primary"
                variant="outlined"
                size="small"
                onClick={createForm.submit}
            >
                join{auth.hasJoinedLeague(id, user?.joinedLeagues) && 'ed'}{' '}
                League {isLoading && <Loading />}
            </Button>

            <Dialog
                content={<div>Sure you want to exit this league ?</div>}
                open={isOpen}
                handleClose={closeDialog}
                title="Exit?"
                size="xs"
                buttons={[
                    {
                        value: 'Cancel',
                        onClick: () => closeDialog(),
                    },
                    {
                        value: value,
                        onClick: exitLeague,
                        color: 'secondary',
                    },
                ]}
            />
            {message && <Toast message={message} />}
        </>
    );
}
