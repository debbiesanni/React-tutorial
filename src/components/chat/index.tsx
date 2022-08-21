import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt';
import Reply from '@material-ui/icons/Reply';
import ThumbDown from '@material-ui/icons/ThumbDown';
import Image from '../shared/image';
import Profile from '../../../public/media/images/default/profile.svg';
import useGlobalStyle from '../../styles';
import useStyle from './style';
import AddChat from './addChat';
import { getServerData, postContent } from 'utils';
import { useQuery } from 'react-query';
import CommentReply from './reply';
import Button from '../button';
import Error from '../shared/error';
import config from '../../utils/config';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import useForm from '../../hooks/useForm';
import { useState } from 'react';
import Loading from '../shared/isLoading';
import Toast from '../shared/toast';

const fetchChats = async ({ queryKey }) => {
    const [, forumId, token] = queryKey;
    const centres = await getServerData(`/reviews/${forumId}`, { token });
    return centres;
};

export default function Chats({ forumId, token }) {
    const globalStyle = useGlobalStyle();
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [indexNumber, setIndexNumber] = useState(null);
    const style = useStyle();
    const { isLoading, data, error } = useQuery(
        ['chat', forumId, token],
        fetchChats
    );
    const createForm = useForm(submit);

    async function submit(id) {
        try {
            setLoading(true);
            const data = await postContent({
                url: `/review/${id}`,
                data: createForm.values,
            });
            setMessage(data.message);
            setLoading(false);
        } catch ({ message }) {
            setMessage(message);
            setLoading(false);
        }
    }
    if (isLoading)
        return (
            <div>
                Loading data ... <Loading />
            </div>
        );
    if (data)
        return (
            <div>
                <AddChat forumId={forumId} />
                {data?.data?.reviews?.map(
                    (
                        { avatar, id, comment, username, surname, firstname },
                        index
                    ) => (
                        <div key={index}>
                            <div
                                className={` ${globalStyle.bottom1rem} ${style.chat}`}
                            >
                                <div className={globalStyle.displayFlex}>
                                    <div style={{ width: 60 }}>
                                        <Image
                                            src={
                                                avatar
                                                    ? `${avatar}`
                                                    : Profile
                                            }
                                            alt="image"
                                            width="40px"
                                            height="40px"
                                            className={globalStyle.bRadius50}
                                        />
                                    </div>
                                    <div
                                        className={`${globalStyle.flex1} ${globalStyle.ml1rem}`}
                                    >
                                        <h3>
                                            {surname} {firstname}
                                        </h3>
                                        <div className={globalStyle.greyColor}>
                                            {username}
                                        </div>
                                        <div
                                            className={`${globalStyle.top5px} ${style.comment}`}
                                        >
                                            {comment}
                                        </div>

                                        <div
                                            className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.top5px}`}
                                        >
                                            <div
                                                className={`${globalStyle.displayFlex}`}
                                            >
                                                <div
                                                    className={`${globalStyle.displayFlex} ${globalStyle.alignItems}`}
                                                >
                                                    <div
                                                        className={`${style.likes} ${style.likesHolder} ${globalStyle.bRadius50} ${globalStyle.displayFlex} ${globalStyle.justifyCenter} ${globalStyle.alignItems}`}
                                                    >
                                                        <ThumbUpAlt
                                                            className={`${style.dislikesIcon} ${globalStyle.colorWhite}`}
                                                        />
                                                    </div>
                                                    <div
                                                        className={`${style.green} ${style.font13}`}
                                                    >
                                                        14
                                                    </div>
                                                </div>
                                                <div
                                                    className={`${globalStyle.displayFlex} ${globalStyle.ml1rem} ${globalStyle.alignItems}`}
                                                >
                                                    <div
                                                        className={`${style.dislikes} ${style.likesHolder} ${globalStyle.bRadius50} ${globalStyle.displayFlex} ${globalStyle.justifyCenter} ${globalStyle.alignItems}`}
                                                    >
                                                        <ThumbDown
                                                            className={`${style.dislikesIcon} ${globalStyle.danger}`}
                                                        />
                                                    </div>
                                                    <div
                                                        className={`${globalStyle.danger} ${style.font13}`}
                                                    >
                                                        14
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className={`${globalStyle.displayFlex} ${globalStyle.alignItems}`}
                                            >
                                                <div
                                                    onClick={() => {
                                                        setIndexNumber(id);
                                                        setShow(!show);
                                                    }}
                                                    className={`${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.cursor} `}
                                                >
                                                    <Reply color="primary" />
                                                    <span
                                                        className={
                                                            globalStyle.greyColor
                                                        }
                                                    >
                                                        Reply
                                                    </span>
                                                </div>
                                                <div
                                                    className={`${globalStyle.danger} ${globalStyle.ml1rem} ${globalStyle.cursor}`}
                                                >
                                                    Report
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {show && indexNumber === id && (
                                    <>
                                        <TextareaAutosize
                                            aria-label="minimum height"
                                            rowsMin={3}
                                            cols={60}
                                            name="comment"
                                            placeholder="What's on your mind"
                                            onChange={(e) =>
                                                createForm.getData(e)
                                            }
                                            className={`${globalStyle.mt2rem} ${globalStyle.textArea}`}
                                        />
                                        <div
                                            className={`${globalStyle.displayFlex} ${globalStyle.justifyFlexEnd} ${globalStyle.mt2rem}`}
                                        >
                                            <Button
                                                color="primary"
                                                variant="contained"
                                                size="small"
                                                onClick={()=>submit(id)}
                                            >
                                                Submit{' '}
                                                {isLoading && <Loading />}
                                            </Button>
                                        </div>
                                    </>
                                )}
                            </div>
                            <CommentReply forumId={id} token={token} />
                            {message && <Toast message={message} />}
                        </div>
                    )
                )}
            </div>
        );
    if (error) return <Error error={error} />;
}
