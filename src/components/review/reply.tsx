import Reply from '@material-ui/icons/Reply';
import useGlobalStyle from '../../styles';
import Toast from '../shared/toast';
import { postContent } from 'utils';
import { useState } from 'react';
import Input from '@components/shared/input';
import useForm from '../../hooks/useForm';
import Loading from '../shared/isLoading';
import {useMutation, useQueryClient} from 'react-query';
import { useAppSelector } from '@redux/hooks';

export default function Chats({ replyId }: any): any {
    const globalStyle = useGlobalStyle();
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [sureCheck, setSureCheck] = useState(null);
    
    const createForm = useForm(addComment);

    const queryClient = useQueryClient()

    const submitReply = async (submitData) => {
        
        try {
            setIsLoading(true)
            const data = await postContent({
                url: `/review/${replyId}`,
                data: submitData,
            });
            setIsLoading(false);
            submitData.comment = ""
            return data

        } catch ({ message }) {
            setMessage(message);
            setIsLoading(false);
        }
    }

    const { mutate } = useMutation( submitReply, {
        
        onSuccess : (data) => {
            queryClient.setQueryData(['reviews', replyId], data)
        }
    })

    async function addComment() {
        mutate(createForm.values)
    }

    return (
        <div style={{marginLeft: '6rem'}}>
            <div
                onClick={() => {
                    setSureCheck(replyId);
                    setShow(!show);
                }}
                className={`${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.cursor}`}
                
            >
                <Reply color="primary" /> Reply
            </div>
            {show && sureCheck === replyId && (
                <>
                    <Input
                        id="comment"
                        type="text"
                        placeholder="Reply"
                        autoFocus
                        onChange={(e) => createForm.getData(e)}
                        autoComplete="off"
                        value={!createForm.values.comment ? '' : createForm.values.comment}
                    />
                    
                    <button
                        onClick={() => addComment()}
                        className={`${globalStyle.btn} ${globalStyle.btnBg} ${globalStyle.mr1rem}`}
                        style={{
                            border: 'none',
                            cursor: 'pointer',
                            marginBottom: '1rem',
                        }}
                    >
                        Comment {isLoading && <Loading />}
                    </button>
                    {message && <Toast message={message} />}
                </>
            )}
        </div>
    );
}