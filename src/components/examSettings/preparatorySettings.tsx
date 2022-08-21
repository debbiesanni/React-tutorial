import { useState, useEffect } from 'react';
import useGlobalStyle from '../../styles';
import Button from '../button';
import Switch from '../shared/mapSwitch';
import useForm from '../../hooks/useForm';
import { updateServerData } from 'utils';
import Loading from '../shared/isLoading';
import Toast from '../shared/toast';
import Input from '../shared/input';
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
            allowReattempt: exam?.data.allowReattempt,
            allowTimerPause: exam?.data.allowTimerPause,
            allowCustomDuration: exam?.data.allowCustomDuration,
            allowCustomQuestionLength: exam?.data.allowCustomQuestionLength,
            showCorrection: exam?.data.showCorrection,
            maximumAttempt: exam?.data.maximumAttempt,
        });
        setIsLoading(false);
    }, [exam]);

    const switchContent = [
        {
            name: 'allowReattempt',
            label: 'Allow candidates to re-attempt preparatory exam',
            onChange: createForm.check,
            defaultValue: createForm.values.allowReattempt,
        },
        {
            name: 'allowTimerPause',
            label: 'Allow candidates to pause time while taking practice exam',
            onChange: createForm.check,
            defaultValue: createForm.values.allowTimerPause,
        },
        {
            name: 'allowCustomDuration',
            label: 'Allow candidates to set exam duration before practice',
            onChange: createForm.check,
            defaultValue: createForm.values.allowCustomDuration,
        },
        {
            name: 'allowCustomQuestionLength',
            label: 'Allow candidates to set number of questions to practice with per time',
            onChange: createForm.check,
            defaultValue: createForm.values.allowCustomQuestionLength,
        },
        {
            name: 'showCorrection',
            label: 'Allow candidates to see correction after submission',
            onChange: createForm.check,
            defaultValue: createForm.values.showCorrection,
        },
    ];
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
                <Links centreSlug={centreSlug} title="Preparatory Exam Mode" />
                <div style={{ padding: '40px 20px 0 20px' }}>
                    <div
                        style={{
                            color: '#999999',
                            fontSize: 16,
                            fontWeight: 'normal',
                            fontStyle: 'normal',
                            lineHeight: 1.5,
                            marginBottom: 15,
                        }}
                    >
                        The Preparatory Exam Mode is made for practice and
                        preparatory exams, where you allow your candidates to do
                        any of the allowed configurations.
                    </div>
                    <Input
                        variant="outlined"
                        placeholder="How many times do you want candidate to re-attempt the exam?"
                        name="maximumAttempt"
                        type="number"
                        labelWidth={230}
                        defaultValue={createForm.values.maximumAttempt}
                        onChange={(e) => createForm.getData(e)}
                        fullWidth={false}
                        style={{ width: 500 }}
                    />
                    <div className={``}>
                        <Switch content={switchContent} />
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
