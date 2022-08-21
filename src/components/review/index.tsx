import useGlobalStyle from '../../styles';
import AddReview from './addReview';
import { getServerData } from 'utils';
import { centreReviews } from '@redux/slice/review';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Toast from '../shared/toast';
import Reviews from './displayReview';

interface Props {
    id: any;
    style?: any;
}

const fetchReview = async ({ queryKey }) => {
    const [, replyId] = queryKey;
    const reviews = await getServerData(`/reviews/${replyId}`);
    return reviews;
};

export default function Review({ id }: Props) {
    const globalStyle = useGlobalStyle();
    const dispatch = useAppDispatch();
    const [message, setMessage] = useState('');
    const { reviews } = useAppSelector(({ review }) => review.centreReviews);

    const { error, data } = useQuery(
        ['reviews', id],
        fetchReview,
        {
            // staleTime: 5,
            // initialData: reviews,
            // refetchInterval: 2000,
            // refetchIntervalInBackground: true,
            // refetchOnWindowFocus: true,
        }
    );

    useEffect(() => {
        const getReviews = async () => {
            try {
                const { data } = await getServerData(`/reviews/${id}`);
                dispatch(centreReviews(data));
            } catch ({ message }) {
                setMessage(message);
            }
        };

        getReviews();
    }, [id]); 
    
    return (
        <div className={globalStyle.mt15px}>
            <AddReview id={id} />
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.justifySpaceBtw} ${globalStyle.top1rem} ${globalStyle.bottom1rem}`}
            >
                <div
                    style={{ borderBottom: '1px solid #C5C7CD', width: '75%' }}
                    className="displayNoneMobile"
                ></div>
                <div className="reviewSort">
                    <div>
                        <div className="dropdown">
                            Sorted by: <b>Recent</b>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`${globalStyle.CardWithBoxShadow} `}
                style={{ marginBottom: '2rem' }}
            >
                {data?.data?.reviews.length > 0 && <Reviews reviews={data?.data?.reviews} id = {id}/>}
                
            </div>
            <Toast message={message} />
        </div>
    );
}