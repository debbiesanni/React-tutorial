import Button from '../button';
import useGlobalStyle from '../../styles';
import { session, updateServerData } from 'utils';
import useForm from '../../hooks/useForm';
import Loading from '../shared/isLoading';
import Toast from '../shared/toast';
import { useState } from 'react';
import Input from '@components/shared/input';

export default function Auth() {
    const globalStyle = useGlobalStyle();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const createForm = useForm(submit);
    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            const {data} = await updateServerData({
                url: `/auth/update/password`,
                data: createForm.values,
            });
            session.set('user', data);
            setMessage("Password changed successfully");
            setIsLoading(false);
        } catch ({ message }) {
            setMessage(message);
            setIsLoading(false);
        }
    }

    return (
        <>
            <div
                className={` `}
            >
            <Input 
            placeholder= 'Enter Old Password'
            name= 'oldPassword'
            type= 'password'
            labelWidth= {140}
            onChange= {(e) => createForm.getData(e)}
            />

            <Input 
            placeholder= 'Enter New Password'
            name= 'newPassword'
            type= 'password'
            labelWidth= {150}
            onChange= {(e)=>createForm.getData(e)}
            />

            <Input 
            placeholder= 'Enter Confirm Password'
            name= 'confirmPassword'
            type= 'password'
            labelWidth= {175}
            onChange= {(e)=>createForm.getData(e)}
            />

            </div>
            <div className={globalStyle.top1rem}>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={createForm.submit}
                >
                    Update Password {isLoading && <Loading/>}
                </Button>
            </div>
            {message && <Toast message={message} />}
        </>
    );
}
