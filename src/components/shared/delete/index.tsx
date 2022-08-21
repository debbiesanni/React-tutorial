import useGlobalStyle from '../../../styles';
import Dialog from '../../dialog';
import useDialog from '../../../hooks/useDialog';
import { useRouter } from 'next/router';
import DeleteForever from '../../deleteIcon';
import Delete from '@material-ui/icons/Delete';
import { deleteServerData } from '../../../utils';
import Toast from '../toast';
import { useState } from 'react';
import Loading from '../isLoading';
import { useAppDispatch } from '@redux/hooks';

interface Props {
    name: string;
    icon?: boolean;
    url: string;
    redirect?: string;
    reject?: boolean;
    index?: number;
    setData?: Function;
    dataReset?: any;
    reduxCentreName?: string | any;
    dataToDelete?: any;
    reload?: boolean;
    textWithIcon?: boolean;
    className?: string;
    routerBack?: boolean;
    children?: JSX.Element;
}
export default function CentreContact({
    name,
    url,
    icon,
    redirect,
    reject,
    index,
    setData,
    dataReset,
    reduxCentreName,
    dataToDelete,
    reload,
    textWithIcon,
    className,
    routerBack,
    children,
}: Props): JSX.Element {
    const globalStyle = useGlobalStyle();
    const router = useRouter();
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { closeDialog, openDialog, isOpen } = useDialog();
    const dispatch = useAppDispatch();
    async function deleteData() {
        setMessage('');

        try {
            setIsLoading(true);
            value;
            const { message } = await deleteServerData({
                url: `/${url}`,
            });
            setMessage(message);
            if (reduxCentreName) {
                dispatch(reduxCentreName(dataToDelete));
            }
            if (routerBack) {
                router.back();
            }
            if (redirect) {
                router.push(redirect);
            } else if (dataReset) {
                dataReset.splice(index, 1);
                setData([...dataReset]);
            }
            if (reload) {
                window.location.reload();
            }
            setIsLoading(false);
            closeDialog();
        } catch ({ message }) {
            setMessage(message);
            closeDialog();
            setIsLoading(false);
        }
    }

    const addContect = (
        <div className={globalStyle.padding1rem}>
            <h2 className={globalStyle.textAlignCenter}>
                Are you sure you want to delete this {name}
            </h2>
        </div>
    );
    const value = <>Sure Delete {isLoading && <Loading />}</>;
    return (
        <div title="Delete">
            {children ? (
                <div onClick={() => openDialog()}>{children}</div>
            ) : textWithIcon ? (
                <span
                    className={`${globalStyle.displayFlex} ${globalStyle.flexColumn} ${globalStyle.alignItems} ${className}`}
                    onClick={() => openDialog()}
                >
                    <Delete />
                    Delete
                </span>
            ) : icon ? (
                <DeleteForever
                    className={globalStyle.danger}
                    onClick={() => openDialog()}
                />
            ) : (
                <div
                    onClick={() => openDialog()}
                    className={`${globalStyle.danger} ${globalStyle.cursor} ${globalStyle.top5px}`}
                >
                    {reject ? 'Reject' : 'Delete'} {name} ?
                </div>
            )}
            <Dialog
                content={addContect}
                open={isOpen}
                handleClose={closeDialog}
                title="Delete?"
                size="xs"
                buttons={[
                    {
                        value: 'Cancel',
                        onClick: () => closeDialog(),
                    },
                    {
                        value: value,
                        onClick: deleteData,
                        color: 'primary',
                    },
                ]}
            />
            {message && <Toast message={message} />}
        </div>
    );
}
