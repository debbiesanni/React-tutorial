import useGlobalStyle from '../../styles';
import { getServerData } from 'utils';
import { useState } from 'react';
import Toast from '../shared/toast';
import Reviews from './displayReview';
import { useQuery } from 'react-query';

const fetchReview = async ({ queryKey }) => {
    const [, replyId] = queryKey;
    const reviews = await getServerData(`/reviews/${replyId}`);
    return reviews;
};

export default function Chats({ replyId, replyCount, id }: any): any {
    const globalStyle = useGlobalStyle();
    const [message, setMessage] = useState('');
    const [show, setShow] = useState(false);
    const [sureCheck, setSureCheck] = useState(null);
    const [reviews, setReviews] = useState([]);

    const { error, data } = useQuery(
        ['reviews', replyId],
        fetchReview,
        {
            staleTime: 5,
            initialData: reviews,
            refetchInterval: 1000,
            refetchIntervalInBackground: true,
            // refetchOnWindowFocus: true,
        }
    );
    
    async function addComment() {
        try {
            const { data } = await getServerData(`/reviews/${replyId}`);
            setReviews(data.reviews);
            
        } catch ({ message }) {
            setMessage(message);
        }
    }
    
    return (
        <div>
            <div
                onClick={() => {
                    addComment();
                    setSureCheck(replyId);
                    setShow(!show);
                }}
                className={`${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.cursor} ${globalStyle.justifyFlexEnd} ${globalStyle.bottom1rem}`}
            >
                {replyCount} Comments
            </div>
            {show && sureCheck === replyId && (
                <Reviews reviews={data?.data?.reviews} id={id} />
            )}
            {message && <Toast message={message} />}
        </div>
    );
}
