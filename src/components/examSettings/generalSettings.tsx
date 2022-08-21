import { useState, useEffect } from 'react';
import useGlobalStyle from '../../styles';
import Button from '../button';
import Switch from '../shared/mapSwitch';
import useForm from '../../hooks/useForm';
import { updateServerData } from 'utils';
import Loading from '../shared/isLoading';
import Toast from '../shared/toast';
import Input from '../shared/input';
import { TextareaAutosize } from '@material-ui/core';

interface Props {
    exam?: string | any;
    examId?: string;
    centreId?: string;
}

export default function UpdateExam({ exam, examId, centreId }: Props) {
    const globalStyle = useGlobalStyle();
    const createForm = useForm(submit);
    const [isLoading, setIsLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    useEffect(() => {
        createForm.setDefault({
            name: exam?.data.name,
            allowReview: exam?.data.allowReview,
            isSearchable: exam?.data.isSearchable,
            duration: exam?.data.duration,
            endDate: exam?.data.endDate,
            startDate: exam?.data.startDate,
            description: exam?.data.description,
            instruction: exam?.data.instruction,
            completionMessage: exam?.data.completionMessage,
        });
        setIsLoading(false);
    }, [exam]);

    const switchContent = [
        {
            name: 'allowReview',
            label: 'Allow candidates to review exams after submission',
            onChange: createForm.check,
            defaultValue: createForm.values.allowReview,
        },
        {
            name: 'isSearchable',
            label: 'Appear in search',
            onChange: createForm.check,
            defaultValue: createForm.values.isSearchable,
        },
    ];
    // referralPercentage
    async function submit() {
        setMessage('');
        try {
            setLoading(true);
            const data = await updateServerData({
                url: `/centre/${centreId}/exam/${examId}`,
                data: createForm.values,
            });

            setMessage(data.message);
            setLoading(false);
            location.reload();
        } catch ({ message }) {
            setLoading(false);
            setMessage(message);
        }
    }

    if (isLoading) {
        return (
            <div>
                Loading <Loading />
            </div>
        );
    } else
        return (
            <div style={{ padding: '40px 20px 0 20px' }}>
                <Input
                    variant="outlined"
                    placeholder="Enter Exam Name"
                    name="name"
                    type="text"
                    labelWidth={140}
                    defaultValue={createForm.values.name}
                    onChange={(e) => createForm.getData(e)}
                />
                <div
                    className={`${globalStyle.mt10px} ${globalStyle.displayFlex} ${globalStyle.flexWrp} ${globalStyle.justifySpaceBtw}`}
                >
                    <Input
                        variant="outlined"
                        placeholder="Enter Exam Duration"
                        name="duration"
                        type="number"
                        labelWidth={150}
                        defaultValue={createForm.values.duration}
                        onChange={(e) => createForm.getData(e)}
                        className={`flex33`}
                    />

                    <Input
                        variant="outlined"
                        placeholder="Enter Exam Start Date and Time"
                        name="startDate"
                        type="datetime-local"
                        labelWidth={240}
                        // value={
                        //     createForm.values.startDate
                        //         ? createForm.values.startDate.substring(
                        //               0,
                        //               createForm.values.startDate.length - 5
                        //           )
                        //         : ''
                        // }
                        onChange={(e) => createForm.getData(e)}
                        className="flex33 removeDateInputManageExam"
                    />

                    <Input
                        variant="outlined"
                        placeholder="Enter Exam End Date and Time"
                        name="endDate"
                        type="datetime-local"
                        labelWidth={230}
                        // value={
                        //     createForm.values.endDate
                        //         ? createForm.values.endDate.substring(
                        //               0,
                        //               createForm.values.endDate.length - 5
                        //           )
                        //         : ''
                        // }
                        onChange={(e) => createForm.getData(e)}
                        className={`flex33 removeDateInputManageExam`}
                    />
                </div>
                <div style={{ fontWeight: 'normal', fontSize: 16 }}>
                    Enter Exam Description
                </div>
                <TextareaAutosize
                    aria-label="description"
                    // minRows={3}
                    placeholder="Example: This  Exam comprises of psychometric questions and technical questions strictly for candidates that applied for the position of an Accountant."
                    style={{
                        width: '100%',
                        border: '1px solid #999999',
                        borderRadius: 5,
                        marginTop: 5,
                        padding: 20,
                    }}
                    name="description"
                    defaultValue={createForm.values.description}
                    onChange={(e) => createForm.getData(e)}
                />
                <div
                    style={{ fontWeight: 'normal', fontSize: 16 }}
                    className={globalStyle.mt10px}
                >
                    Enter Exam Instruction
                </div>
                <TextareaAutosize
                    aria-label="instruction"
                    defaultValue={createForm.values.instruction}
                    placeholder="Example: Your exam is in two sections, the first section is 50 psychometric and the second section contains 100 technical questions which is mainly centered on your discipline."
                    name="instruction"
                    // minRows={3}
                    style={{
                        width: '100%',
                        border: '1px solid #999999',
                        borderRadius: 5,
                        marginTop: 5,
                        padding: 20,
                    }}
                    onChange={(e) => createForm.getData(e)}
                />
                <div
                    style={{ fontWeight: 'normal', fontSize: 16 }}
                    className={globalStyle.mt10px}
                >
                    Enter Exam Completion Message
                </div>
                <TextareaAutosize
                    defaultValue={createForm.values.completionMessage}
                    placeholder="Example: You have successful completed your exam, you can exit the exam."
                    name="completionMessage"
                    // minRows={3}
                    style={{
                        width: '100%',
                        border: '1px solid #999999',
                        borderRadius: 5,
                        marginTop: 5,
                        padding: 20,
                    }}
                    onChange={(e) => createForm.getData(e)}
                />
                <div
                    className={`${globalStyle.displayFlex} ${globalStyle.flexWrp} ${globalStyle.justifySpaceBtw} ${globalStyle.mt10px}`}
                >
                    <Switch content={switchContent} className={`flex50`} />
                </div>
                <div
                    className={`${globalStyle.mt10px} ${globalStyle.displayFlex} ${globalStyle.justifyFlexEnd}`}
                >
                    <Button
                        onClick={createForm.submit}
                        color="primary"
                        variant="contained"
                        className={`${globalStyle.bottom1rem} ${globalStyle.top1rem}`}
                    >
                        Update Exam {loading && <Loading />}
                    </Button>
                </div>
                {message && <Toast message={message} />}
            </div>
        );
}
