import Button from '../button';
import useGlobalStyle from '../../styles';
import useStyle from './style';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Rating from '@material-ui/lab/Rating';
import { useState } from 'react';
import { postContent } from 'utils';
import useForm from '../../hooks/useForm';
import Loading from '@components/shared/isLoading';
import Toast from '../shared/toast';
import { addReviews } from '@redux/slice/review';
import { useAppDispatch, useAppSelector } from '@redux/hooks';

export default function Review({ id }) {
    const style = useStyle();
    const globalStyle = useGlobalStyle();
    const [value, setValue] = useState(0);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const createForm = useForm(submit);
    const dispatch = useAppDispatch();
    const user = useAppSelector(({ user }) => user);
    const { reviews } = useAppSelector(({ review }) => review.centreReviews);

    async function submit() {
        setMessage('');
        let reviewUserId = []
        reviews.map(({userId}) => reviewUserId.push(userId))

        if(reviewUserId.includes(user?.id)){
            setMessage("Sorry... You can only review once");
        } else {
        try {
            setIsLoading(true);
            const { data } = await postContent({
                url: `/review/${id}`,
                data: createForm.values,
            });
            setMessage("Review added successfully");
            const review = {
                ...data,
                firstname: user.firstname,
                lastname: user.surname,
                avatar: user.avatar,
            };
            setIsLoading(false);
            createForm.setData('comment','');
            dispatch(addReviews(review));
        } catch ({ message }) {
            setMessage(message);
        }
        }
    }

    return (
        <div
            className={`${globalStyle.bottom1rem} ${globalStyle.displayFlex} ${globalStyle.CardWithBoxShadow} ${globalStyle.top1rem}`}
        >
            <div className={`${globalStyle.ml1rem}`}>
                <form>
                    <div className={globalStyle.greyColor}>Post a Comment</div>
                    <TextareaAutosize
                        aria-label="minimum height"
                        rowsMin={3}
                        cols={120}
                        name="comment"
                        placeholder="What's on your mind"
                        className={`${globalStyle.mt2rem} ${globalStyle.textArea}`}
                        onChange={(e) => createForm.getData(e)}
                        value={!createForm.values.comment ? '' : createForm.values.comment}
                    />

                    <div
                        className={`${globalStyle.displayFlex} ${globalStyle.flexWrp}  ${globalStyle.justifySpaceBtw} ${globalStyle.mt2rem}`}
                    >
                        <div className={globalStyle.displayFlex}>
                            <h3 className={`${globalStyle.mr1rem} ${style.leaveRating}`}>
                                Leave your Rating
                            </h3>
                            <Rating
                                name="rating"
                                value={value}
                                className={style.ratingStar}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                    createForm.setDefault({ rating: newValue });
                                }}
                            />
                        </div>
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