import Button from '../../button';
import { session } from '../../../utils';
import Config from '../../../utils/config';
import { useRouter } from 'next/router';
import Subscribe from '../../publication/subscribe';
import Dialog from '@components/dialog';
import useDialog from '@hooks/useDialog';
import { Auth } from '@utils/index';

interface Props {
    link: string;
    className?: string | string[] | any;
    children: string | JSX.Element;
    publication: any;
    subscribeButton?: any;
}
const DownloadLink = ({
    link,
    children,
    className,
    publication,
    subscribeButton,
}: Props) => {
    const user = session.get('user');
    const router = useRouter();
    const { centreId } = router.query;
    const openSubscribeDialog = useDialog();

    return (
        <div>
            <Dialog
                handleClose={openSubscribeDialog.closeDialog}
                title="Subscribe to this publication first"
                open={openSubscribeDialog.isOpen}
            >
                {subscribeButton}
            </Dialog>
            <Button
                variant="outlined"
                color="primary"
                className={className}
                style={{ textTransform: 'none' }}
                onClick={() =>
                    !user
                        ? router.push(
                              `/login?redirect=/centre/${centreId}/publication/${publication.id}`
                          )
                        : !Auth(user).isManager(centreId as string) &&
                          !Auth(user).isPublicationSubscriber(publication.id)
                        ? openSubscribeDialog.openDialog()
                        : window.open(
                              Config.FILE_MANAGER_DOWNLOAD_URL + link,
                              '_blank'
                          )
                }
            >
                {children}
            </Button>
        </div>
    );
};

export default DownloadLink;
