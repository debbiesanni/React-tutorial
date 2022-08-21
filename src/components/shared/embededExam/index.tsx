import { Props } from './interface';
import { getServerData } from '@utils/index';
import ExamCard from '@components/card/embedExam';
import Add from '@components/shared/embededExam/add';
import useGlobalStyle from '@styles/index';
import { useState, useEffect } from 'react';
import Loading from '../isLoading';
import { listEmbededExams } from '@redux/slice/embededExam'; 
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { Auth, session } from '../../../utils';
import Toast from '../toast';

const EmbededExam = ({
    contentId,
    centreId,
    className,
    centre,
}: Props): JSX.Element => {
    const dispatch = useAppDispatch();
    const gStyle = useGlobalStyle();
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const user: any = session.get('user');
    const exams = useAppSelector(({ embededExams }) => embededExams.exams);
    
    useEffect(() => {
        const getExam = async () => {
            try {
                setIsLoading(true);
                const { data: exams } = await getServerData(
                    `/centre/${centreId}/content/${contentId}/embeded-exams`
                );
                dispatch(listEmbededExams(exams));
                setIsLoading(false);
            } catch ({ message }) {
                setMessage(message);
            }
        };
        getExam();
    }, [centreId, contentId]);
    
    return (
        <div className={`${gStyle.paddingLR1rem}`}>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    {!exams || exams.length === 0 ? (
                        <h1>No exam found</h1>
                    ) : (
                        <div className={`${gStyle.displayFlex} ${gStyle.flexWrp}`}>
                            {exams.map((exam, index) => (
                                <ExamCard
                                    index={index}
                                    className={`flex50 ${gStyle.padding1rem}`}
                                    assessment={exam}
                                    centre={centre}
                                    user={user}
                                />
                            ))}
                        </div>
                    )}
                </>
            )}
            <div>
                {Auth(user).isManager(centreId as string) && (
                    <Add contentId={contentId} centreId={centreId} />
                )}  
            </div>
            <Toast message={message} />
        </div>
    );
};

export default EmbededExam;
