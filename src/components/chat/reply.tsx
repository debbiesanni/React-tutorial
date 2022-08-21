import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt';
import Reply from '@material-ui/icons/Reply';
import ThumbDown from '@material-ui/icons/ThumbDown';
import Image from '../shared/image';
import Profile from '../../../public/media/images/default/profile.svg';
import useGlobalStyle from '../../styles';
import useStyle from './style';
import { getServerData } from 'utils';
import { useQuery } from 'react-query';
import Loading from '../shared/isLoading';
import Error from '../shared/error';
import config from '../../utils/config';

const fetchChats = async ({ queryKey }) => {
    const [, forumId, token] = queryKey;
    const centres = await getServerData(`/reviews/${forumId}`, { token });
    return centres;
};

export default function Chats({ forumId, token }) {
    const globalStyle = useGlobalStyle();
    const style = useStyle();
    const { isLoading, data, error } = useQuery(
        ['chat', forumId, token],
        fetchChats
    );
    if (isLoading)
        return (
            <div>
                Loading data... <Loading />{' '}
            </div>
        );
    if (data)
        return data?.data?.reviews?.map(
            ({ avatar, id, comment, school, surname, firstname }, index) => (
                <div
                    key={index}
                    className={`${globalStyle.displayFlex} ${globalStyle.bottom1rem} ${globalStyle.justifyFlexEnd}`}
                >
                    <div
                        className={`${globalStyle.displayFlex} ${globalStyle.top1rem} ${globalStyle.bottom1rem} ${style.chat}`}
                    >
                        <div>
                            <Image
                                src={
                                    avatar
                                        ? `${avatar}`
                                        : Profile
                                }
                                alt={`${surname} ${firstname}`}
                                width="40px"
                                height="40px"
                                className={globalStyle.bRadius50}
                            />
                        </div>
                        <div className={globalStyle.ml1rem}>
                            <h3>
                                {surname} {firstname}
                            </h3>
                            <div className={globalStyle.greyColor}>
                                {school}
                            </div>
                            <div
                                className={`${globalStyle.top5px} ${style.comment}`}
                            >
                                {comment}
                            </div>

                            <div
                                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.top5px}`}
                            >
                                <div className={`${globalStyle.displayFlex}`}>
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
                                        className={`${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.cursor}`}
                                    >
                                        <Reply color="primary" />
                                        <span className={globalStyle.greyColor}>
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
                </div>
            )
        );
    if (error) return <Error error={error} />;
}
