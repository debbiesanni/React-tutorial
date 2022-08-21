import Button from '../button';
import useGlobalStyle from '../../styles';
import useStyle from './style';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { postContent, session } from 'utils';
import useForm from '../../hooks/useForm';
import { useState } from 'react';
import Loading from '../shared/isLoading';
import Toast from '../shared/toast';


export default function Chats({ forumId }) {
    const style = useStyle();
    const globalStyle = useGlobalStyle();
    const user: any = session.get('user');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const createForm = useForm(submit);

    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            const data = await postContent({
                url: `/review/${forumId}`,
                data: createForm.values,
            });
            setMessage(data.message);
            setIsLoading(false);
        } catch ({ message }) {
            setMessage(message);
            setIsLoading(false);
        }
    }
    
    return (
        <div
            className={`${globalStyle.bottom1rem} ${globalStyle.displayFlex} ${style.chat}`}
        >
            <div
                className={`${globalStyle.bRadius50} ${globalStyle.displayFlex} ${globalStyle.justifyCenter} ${globalStyle.alignItems} ${style.chatAvatar}`}
            >
                <strong style={{textTransform: 'uppercase'}}>{user.surname.charAt(0)}{user.firstname.charAt(0)}</strong>
            </div>
            <div className={`${globalStyle.ml1rem}`}>
                <form>
                    <div className={globalStyle.greyColor}>Post a Comment</div>
                    <TextareaAutosize
                        aria-label="minimum height"
                        rowsMin={3}
                        cols={60}
                        name="comment"
                        placeholder="What's on your mind"
                        onChange={(e)=>createForm.getData(e)}
                        className={`${globalStyle.mt2rem} ${globalStyle.textArea}`}
                    />

                    <div
                        className={`${globalStyle.displayFlex} ${globalStyle.justifyFlexEnd} ${globalStyle.mt2rem}`}
                    >
                        <Button
                            color="primary"
                            variant="contained"
                            size="small"
                            onClick={createForm.submit}
                        >
                            Submit {isLoading && <Loading />}
                        </Button>
                    </div>
                </form>
            </div>
            {message && <Toast message={message} />}
        </div>
    );
}
