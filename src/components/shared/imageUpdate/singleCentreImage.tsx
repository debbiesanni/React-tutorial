import { useState } from 'react';
import useStyle from './style';
import useGlobalStyle from '../../../styles';
// import FallBackImage from '../../../../public/media/images/default/defaultImage.jpg';
import EditIcon from '@material-ui/icons/Edit';
import Image from '../image';
import config from '../../../utils/config';
import { auth, updateServerData, uploadFile } from 'utils';
import { UserProps } from 'redux/slice/user';
import { Auth } from '../../../utils';
import useForm from '../../../hooks/useForm';
import Loading from '../isLoading';
import Toast from '../toast';

const FallBackImage = require('../../../../public/media/images/default/defaultImage.jpg')

interface Props {
    id: string;
    user: UserProps;
    defaultImage?: any;
    url: string;
}
export default function ImageUpload({
    id,
    user,
    defaultImage,
    url,
}: Props): JSX.Element {
    const globalStyle = useGlobalStyle();
    const style = useStyle();
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
            <div
                onClick={() =>
                    Auth(user).isManager(id) ? openFile() : ''
                }
                className={`${
                    Auth(user).isManager(id)
                        ? globalStyle.cursor
                        : ''
                }`}
                style={{ flex: '0 0 2rem' }}
            >
                <input
                    type="file"
                    style={{ display: 'none' }}
                    id="imageUrl"
                    onChange={async (e) => {
                        createForm.setData('imageUrl', await uploadFile(e));
                        if(createForm.values.imageUrl){
                           submit() 
                        }
                    }}
                />
                <div className={style.editContainer}>
                {Auth(user).isManager(id) && (
                    <>
                        <p className={style.imageWriteUp}>Change image</p>
                        <EditIcon fontSize='default' /> 
                    </>
                )}
                    
                </div>
                <Image
                    src={
                        defaultImage
                            ? `${defaultImage}`
                            : FallBackImage
                    }
                    alt="image"
                    // height='300px'
                    // width="300px" 
                    className={`${style.borderRadius} ${style.imageClass}`}
                />
                {message && <Toast message={message} />}
            </div>
        );
}
