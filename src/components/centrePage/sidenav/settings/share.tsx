import useStyles from './style';
import { useState, useEffect } from 'react';
import { ShareOutlined } from '@material-ui/icons';
import ShareButton from '../../../shared/share/newShare';
import Dialog from '../../../dialog';
import useDialog from '../../../../hooks/useDialog';


export default function SharedLinks({ name, description, userId }) {
    const styles = useStyles();
    const { closeDialog, openDialog, isOpen } = useDialog();
    const [url, setUrl] = useState<string>();

    useEffect(() => {
        setUrl(window.location.href);
    }, []);
    return (
        <>
            <div
                onClick={() => openDialog()}
                className={` ${styles.cursor} ${styles.displayFlexAlignCentre} ${styles.links}`}
            >
                <ShareOutlined />
                <span className={styles.marginLeft15}>Share Centre</span>
            </div>
            <Dialog
                content={
                    <ShareButton
                        name={name}
                        url={`${url}?referralCode=${userId}`}
                        description={description}
                        className="check"
                        iconClassName={styles.displayFlexAlignCentre}
                    />
                }
                open={isOpen}
                handleClose={closeDialog}
                title="Share"
                size="sm"
                // buttons={[
                //     {
                //         value: value,
                //         // onClick: () => createForm.submit(),
                //     },
                // ]}
            />
        </>
    );
}
