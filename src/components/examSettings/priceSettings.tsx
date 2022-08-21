import { useState, useEffect } from 'react';
import useGlobalStyle from '../../styles';
import Button from '../button';
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
            price: exam?.data?.price,
            // maxTrialQuestions: exam?.data?.maxTrialQuestions,
        });
        setIsLoading(false);
    }, [exam]);

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
                <Links centreSlug={centreSlug} title="Add Price to Exam " />
                <div
                    style={{ padding: '40px 20px 0 20px', textAlign: 'center' }}
                >
                    <div
                        style={{
                            color: '#999999',
                            fontSize: 16,
                            fontWeight: 'normal',
                            fontStyle: 'normal',
                            lineHeight: 1.5,
                            marginBottom: 25,
                        }}
                    >
                        Add price a candidate will pay to access your exam.
                    </div>
                    <Input
                        variant="outlined"
                        placeholder="Enter Exam Price In Naira (₦)"
                        name="price"
                        type="number"
                        labelWidth={150}
                        defaultValue={createForm.values.price}
                        onChange={(e) => createForm.getData(e)}
                        style={{ width: 550 }}
                    />
                    {/* <Input
                        variant="outlined"
                        placeholder="Enter number of free sample questions (free trials before paying to access)"
                        name="maxTrialQuestions"
                        type="number"
                        labelWidth={270}
                        defaultValue={createForm.values.maxTrialQuestions}
                        onChange={(e) => createForm.getData(e)}
                        style={{ width: 550 }}
                    /> */}
                    <div className={`${globalStyle.mt15px}`}>
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
