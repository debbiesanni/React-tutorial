import { useState, useEffect } from 'react';
import useGlobalStyle from '../../styles';
import Button from '../button';
import Switch from '../switch';
import useForm from '../../hooks/useForm';
import { updateServerData } from 'utils';
import Loading from '../shared/isLoading';
import Toast from '../shared/toast';
import Links from './links';

interface Props {
    exam?: string | any;
    id?: string;
    centreId?: string;
    centreSlug: string;
}

export default function UpdateExam({ exam, id, centreId, centreSlug }: Props) {
    const globalStyle = useGlobalStyle();
    const createForm = useForm(submit);
    const [isLoading, setIsLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    useEffect(() => {
        createForm.setDefault({
            randomiseQuestion: exam?.data.randomiseQuestion,
            randomiseOption: exam?.data.randomiseOption,
            allowResume: exam?.data.allowResume,
        });
        setIsLoading(false);
    }, [exam]);
    // referralPercentage
    async function submit() {
        setMessage('');
        try {
            setLoading(true);

            const data = await updateServerData({
                url: `/centre/${centreId}/exam/${id}`,
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
            <>
                <Links centreSlug={centreSlug} title="Monitor & Secure Exams" />
                <div style={{ padding: '40px 20px 0 20px' }}>
                    <div
                        style={{
                            color: '#999999',
                            fontSize: 16,
                            fontWeight: 'normal',
                            fontStyle: 'normal',
                            lineHeight: 1.5,
                            marginBottom: 10,
                        }}
                    >
                        Activate the question and question’s options
                        randomization to allow your exam shuffle the exam
                        question numbers and options when candidates are taking
                        your exam.
                    </div>
                    <div
                        style={{
                            border: '1px solid #999999',
                            borderRadius: 5,
                            padding: 20,
                            color: '#333333',
                        }}
                        className={`${globalStyle.border} ${globalStyle.displayFlex} ${globalStyle.flexWrp} ${globalStyle.justifySpaceBtw}`}
                    >
                        <Switch
                            label="Activate Question Randomization"
                            name="randomiseQuestion"
                            handleChange={createForm.check}
                            defaultValue={createForm.values.randomiseQuestion}
                        />
                        <Switch
                            label="Activate Question options randomization"
                            name="randomiseOption"
                            handleChange={createForm.check}
                            defaultValue={createForm.values.randomiseOption}
                        />
                    </div>
                    <div
                        style={{
                            color: '#999999',
                            fontSize: 16,
                            fontWeight: 'normal',
                            fontStyle: 'normal',
                            lineHeight: 1.5,
                            marginBottom: 10,
                            marginTop: 10,
                        }}
                    >
                        Activate the resumption of exams if candidates put off
                        their device to allow candidate continue from where they
                        stopped if their mistakenly leave the exam environment.
                    </div>
                    <div
                        style={{
                            border: '1px solid #999999',
                            borderRadius: 5,
                            padding: 20,
                            color: '#333333',
                        }}
                        className={`${globalStyle.border} ${globalStyle.displayFlex} ${globalStyle.flexWrp} ${globalStyle.justifySpaceBtw}`}
                    >
                        <Switch
                            label="Activate resumption of exams if candidates put off their device"
                            name="allowResume"
                            handleChange={createForm.check}
                            defaultValue={createForm.values.allowResume}
                        />
                    </div>
                    <div
                        className={`${globalStyle.mt15px} ${globalStyle.displayFlex} ${globalStyle.justifyFlexEnd}`}
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
            </>
        );
}
