import useGlobalStyle from '../../styles';
import useStyle from './style';
import Settings from './setting';
import Image from '../shared/image';
import Rating from '../rating';
import { ReviewProps } from './interface';
import ReviewReply from './reply';
import ViewReply from './viewReply';
import { useAppSelector } from '@redux/hooks';

const Logo = '/media/images/default/profile.svg';

export default function Review({ reviews, id }) {
    const globalStyle = useGlobalStyle();
    const style = useStyle();
    const user = useAppSelector(({ user }) => user);

    return (
        <div
            className={`${globalStyle.CardWithBoxShadow} `}
            style={{ marginBottom: '2rem' }}
        >
            {reviews?.map((review: ReviewProps, index) => (
                <div key={index}>
                    <div
                        className={`${globalStyle.displayFlex} ${globalStyle.paddingLR1rem} ${globalStyle.top1rem}`}
                        key={index}
                    >
                        <div style={{ flex: '0 0 5rem' }}>
                            <Image
                                src={review.avatar ? review.avatar : Logo}
                                alt=""
                                width="50px"
                                height="50px"
                            />
                        </div>
                        <div className={globalStyle.flex1}>
                            <h3 className={`${globalStyle.bottom2px} ${style.name}`}>
                                {review.surname} {review.firstname}
                            </h3>
                            <div style={{ textAlign: 'justify' }}>
                                {review.comment}
                            </div>
                            <div
                                className={`${globalStyle.displayFlex} ${globalStyle.alignItems}`}
                            >
                                <div
                                    className={`${globalStyle.top5px} ${globalStyle.mr5px}`}

                                >
                                    {review?.rating > 0 && (
                                        <Rating value={review.rating} />
                                    )}
                                </div>
                                
                            </div>
                            
                        </div>
                        
                        <div
                            style={{ flex: '0 0 2rem' }}
                            className={globalStyle.textAlignRight}
                        >
                            {user?.id === review?.userId &&
                                <Settings
                                    id={review.id}
                                    currentReview={review}
                                />
                            }
                        </div>

                        </div>
                        <ReviewReply replyId={review?.id} />
                        {review?.replyCount > 0 && (
                            <ViewReply
                                replyId={review?.id}
                                replyCount={review?.replyCount}
                                id={id}
                            />
                        )}
                </div>
            ))}
        </div>
    );
}
