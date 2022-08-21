import { Props } from './interface';
import { getServerData } from '@utils/index';
import LeagueCard from '@components/card/embededLeague';
import Add from './add';
import useGlobalStyle from '@styles/index';
import { useState, useEffect } from 'react';
import Toast from '../toast';
import { listEmbededLeague } from '@redux/slice/embededLeagues';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import Loading from '../isLoading';
import { Auth, session } from '../../../utils';

const EmbededLeague = ({
    contentId,
    centre,
    className,
}: Props): JSX.Element => {
    const [message, setMessage] = useState('');
    const dispatch = useAppDispatch();
    const gStyle = useGlobalStyle();
    const [isLoading, setIsLoading] = useState(false);
    const user: any = session.get('user');
    const leagues = useAppSelector(
        ({ embededLeagues }) => embededLeagues.leagues
    );

    useEffect(() => {
        const getLeague = async () => {
            try {
                setIsLoading(true);
                const { data: leagues } = await getServerData(
                    `/centre/${centre.id}/content/${contentId}/embeded-leagues`
                );
                dispatch(listEmbededLeague(leagues));
                setIsLoading(false);
            } catch ({ message }) {
                setMessage(message);
            }
        };
        getLeague();
    }, [centre.id, contentId]);

    return (
        <div className={`${gStyle.paddingLR1rem}`}>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    {!leagues || leagues?.length === 0 ? (
                        <h1>No league found</h1>
                    ) : (
                        <div
                            className={`${gStyle.displayFlex} ${gStyle.padding1rem}`}
                        >
                            {leagues?.map((league, index) => (
                                <div className={`${gStyle.padding1rem}`}>
                                    <LeagueCard
                                        className={`flex33 `}
                                        content={league}
                                        index={index}
                                        centre={centre}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </>
            )}
            <div>
                {Auth(user).isManager(centre.id as string) && (
                    <Add contentId={contentId} centreId={centre.id} />
                )}  
            </div>
            <Toast message={message} />
        </div>
    );
};

export default EmbededLeague;
