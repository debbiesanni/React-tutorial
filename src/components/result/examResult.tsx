import NoContent from '@components/shared/noContent';
import Table, { ColumnProps } from '../table';
import Settings from './setting';
import Dropdown from '../shared/dropdown';
import useGlobalStyle from '../../styles';
import QuestionMark from './marks';
import Filter from './filter';
import Button from '@components/button';
import { useState } from 'react';
import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';

export default function CentreHome({ centreId, examId, result, token }) {
    const [subscriber, setSubscriber] = useState(result?.data?.result);
    const globalStyle = useGlobalStyle();
    const tableRef = useRef();
    const content = (
        <div>
            <Filter
                centreId={centreId}
                examId={examId}
                token={token}
                setSubscriber={setSubscriber}
            />
            <QuestionMark
                value="Question Marks"
                centreId={centreId}
                examId={examId}
                token={token}
            />
            <ReactToPrint
                trigger={() => (
                    <h4 className={`${globalStyle.dropdown}`}>Print Result</h4>
                )}
                content={() => tableRef.current}
            />
        </div>
    );

    const columns: ColumnProps[] = [
        { header: 'S/N', accessor: 'sn' },
        { header: 'Surname', accessor: 'surname' },
        { header: 'Firstname', accessor: 'firstname' },
        { header: 'Total Score', accessor: 'maxScore' },
        { header: 'Exam Score', accessor: 'score' },
        { header: 'Duration(in minitue)', accessor: 'time' },
        { header: 'Action', accessor: 'action' },
    ];
    const results = subscriber?.map((data, index) => ({
        sn: ++index,
        time:
            Math.floor(data.duration / 60) +
            ':' +
            Math.floor(data.duration % 60),
        ...data,
        action: (
            <Settings
                centreId={centreId}
                examId={examId}
                answer={data}
                token={token}
                answerId={data.id}
                surname={data.surname}
                firstname={data.firstname}
            />
        ),
    }));

    return subscriber?.length > 0 ? (
        <>
            <div className={`${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.mt15px}`}>
                <Dropdown
                    style={{ width: 150 }}
                    trigger={
                        <Button
                            color="primary"
                            size="small"
                            variant="contained"
                        >
                            Exam Result Menu
                        </Button>
                    }
                    content={content}
                    className={`${globalStyle.left} ${globalStyle.contactContainer}`}
                    defaultSetting={true}
                />
                <span style={{ fontSize: 13, marginLeft: 10 }}>
                    Print resultt in CSV format
                </span>
            </div>
            <div ref={tableRef} style={{ padding: 20 }}>
                <Table
                    data={results}
                    columns={columns}
                    style={{
                        background: '#ffffff',
                        border: '1px solid #C4C4C4',
                        borderRadius: 5,
                        marginTop: 30,
                    }}
                />
            </div>
        </>
    ) : (
        <NoContent name="result" />
    );
}
