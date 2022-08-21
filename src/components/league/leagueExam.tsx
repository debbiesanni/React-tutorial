import Card from '../card';
import useGlobalStyle from '../../styles';
import AddExam from './addExam';
import Link from '../shared/link';
import { auth } from 'utils';
import { useState } from 'react';

export default function LeagueExams({ leagueId, centreId, user, exams }) {
    const globalStyle = useGlobalStyle();
    const [examList, setExamList] = useState(exams?.data);

    return (
        <div className={globalStyle.paddingLR1rem}>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.bottom1rem}`}
            >
                {(auth.isOwner(centreId, user?.ownCentres) ||
                    auth.isManager(centreId, user?.managingCentres)) && (
                    <AddExam
                        centreId={centreId}
                        leagueId={leagueId}
                        token={user?.token}
                        setExamList={setExamList}
                        examList={examList}
                    />
                )}
                <Link
                    text="View All"
                    link="/leagues-exam"
                    className={globalStyle.primaryColor}
                />
            </div>

            {examList?.length > 0 ? (
                <div
                    className={`${globalStyle.displayFlex} ${globalStyle.flexWrp} ${globalStyle.justifySpaceBtw}`}
                >
                    {examList?.map((content, index) => (
                        <div key={index} className={`flex33 ${globalStyle.bottom1rem}`}>
                            <Card
                                {...content}
                                leagueId={leagueId}
                                setData={setExamList}
                                data={examList}
                                centreId={centreId}
                                deleteExam={true}
                                index={index}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                'No content found'
            )}
        </div>
    );
}
