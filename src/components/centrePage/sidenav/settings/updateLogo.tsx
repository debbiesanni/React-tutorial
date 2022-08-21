import useStyle from '../../style';
import { useState } from 'react';
import { postContent, uploadFile } from 'utils';
import Loading from '../../../shared/isLoading';
import { CameraAltOutlined } from '@material-ui/icons';

export default function uploadCentreLogo({ id, setMessage }) {
    const [isLoading, setIsLoading] = useState(false);
    const styles = useStyle();
    const openFile = () => {
        document.getElementById('file').click();
    };

    async function updateImage(e) {
        setMessage('');
        try {
            setIsLoading(true);
            const data = await uploadFile(e);
            if (data) {
                await postContent({
                    url: `/centre/${id}/logo`,
                    data: { imageUrl: data },
                });
                setMessage('Upload Successful');
                setIsLoading(false);
            }
        } catch ({ message }) {
            setIsLoading(false);
            setMessage(message);
        }
    }

    return (
        <>
            <div
                className={` ${styles.cursor} ${styles.displayFlexAlignCentre} ${styles.settingsIcon}`}
                onClick={() => openFile()}
            >
                <CameraAltOutlined className={styles.LightBlack} />
                <span className={styles.marginLeft15}>
                    Change Logo {isLoading && <Loading />}
                </span>
            </div>
            <input
                style={{ display: 'none' }}
                type="file"
                id="file"
                onChange={(e) => updateImage(e)}
            />
        </>
    );
}
