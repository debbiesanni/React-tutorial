import { useState } from 'react';
import useGlobalStyle from '../../../styles';
import Image from '../image';
import config from '../../../utils/config';
import { auth, updateServerData, uploadFile } from 'utils';
import { UserProps } from 'redux/slice/user';
import useForm from '../../../hooks/useForm';
import Loading from '../isLoading';
import Toast from '../toast';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

interface Props {
    id: string;
    user: UserProps;
    defaultImage?: any;
    url: string;
    height?: string;
    width?: string;
}
export default function ImageUpload({
    id,
    user,
    defaultImage,
    url,
    height,
    width
}: Props): JSX.Element {
    const globalStyle = useGlobalStyle();
    const createForm = useForm(submit);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const openFile = () => {
        document.getElementById('imageUrl').click();
    };

    async function submit() {
        try {
            setIsLoading(true);
            const data = await updateServerData({
                url: url,
                data: createForm.values,
            });
            setMessage(data.message);
            setIsLoading(false);
            window.location.reload();
        } catch ({ message }) {
            setMessage(message);
            setIsLoading(false);
        }
    }

    if (isLoading) return <Loading />;
    else
        return (
            <div style={{ flex: '0 0 10rem', position: 'relative' }}>
                <input
                    type="file"
                    style={{ display: 'none' }}
                    id="imageUrl"
                    onChange={async (e) => {
                        createForm.setData('imageUrl', await uploadFile(e));
                        if (createForm.values.imageUrl) {
                            submit();
                        }
                    }}
                />
                <Image
                    src={
                        defaultImage
                            ? `${defaultImage}`
                            : '/media/images/default/defaultImage.jpg'
                    }
                    alt="image"
                    height={height? height : '150px'}
                    width={width? width : '150px'}
                />
                {auth.isManager(id, user?.managingCentres) && (
                    <PhotoCamera
                        onClick={() => openFile()}
                        className={globalStyle.cursor}
                        style={{
                            position: 'absolute',
                            right: 30,
                            bottom: 30,
                            color: 'white',
                            background: 'black',
                            borderRadius: 10,
                        }}
                    />
                )}
                {message && <Toast message={message} />}
            </div>
        );
}
