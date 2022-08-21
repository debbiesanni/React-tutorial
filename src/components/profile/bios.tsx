import Button from '../button';
import useGlobalStyle from '../../styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import ImageUpload from '../shared/imageUpload';
import { session, updateServerData, uploadFile } from 'utils';
import useForm from '../../hooks/useForm';
import Loading from '../shared/isLoading';
import Toast from '../shared/toast';
import { useState, useEffect } from 'react';
import Input from '../shared/input';

interface Props {
    user?: any;
}

export default function Auth({ user }: Props) {
    const globalStyle = useGlobalStyle();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const [image, setImage] = useState('');
    const createForm = useForm(submit);

    useEffect(() => {
        createForm.setDefault({
            gender: user.gender,
            surname: user.surname,
            firstname: user.firstname,
            username: user.username,
            position: user.position,
            placeOfWork: user.placeOfWork,
            avatar: user.avatar,
        });
        setLoading(false);
    }, [user]);

    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            image && createForm.setData('avatar', await uploadFile(image));
            if (!createForm.values.gender) {
                delete createForm.values.gender;
            }
            if(!createForm.values.avatar){
                delete createForm.values.avatar
            }
            const { data } = await updateServerData({
                url: `/auth/update`,
                data: createForm.values,
            });
            session.set('user', data);
            session.set('token', data.token);
            setMessage('Update Successful');
            setIsLoading(false);
            window.location.reload();
        } catch ({ message }) {
            setMessage(message);
            setIsLoading(false);
        }
    }

    if (loading)
        return (
            <div>
                loading... <Loading />
            </div>
        );
    return (
        <>
            <div>
                <ImageUpload
                    defaultImage={createForm.values.avatar}
                    id="image"
                    setImage={setImage}
                />
            </div>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp}`}
            >
                <Input
                    placeholder="Enter First name"
                    name="firstname"
                    type="text"
                    onChange={(e) => createForm.getData(e)}
                    defaultValue={createForm.values.firstname}
                    labelWidth={115}
                    className="flex50"
                />
                <Input
                    placeholder="Enter Last name"
                    name="surname"
                    type="text"
                    onChange={(e) => createForm.getData(e)}
                    defaultValue={createForm.values.surname}
                    labelWidth={115}
                    className="flex50"
                />

                <FormControl variant="outlined" className="flex33">
                    <InputLabel htmlFor="gender">Gender</InputLabel>
                    <Select
                        className={globalStyle.bottom1rem}
                        native
                        value={createForm.values.gender}
                        onChange={(e) => createForm.getData(e)}
                        label="Gender"
                        inputProps={{
                            name: 'gender',
                            id: 'gender',
                        }}
                    >
                        <option value="others">Others</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </Select>
                </FormControl>
            </div>
            <div className={globalStyle.top1rem}>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={createForm.submit}
                >
                    Update Profile {isLoading && <Loading />}
                </Button>
            </div>
            {message && <Toast message={message} />}
        </>
    );
}
