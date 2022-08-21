import Button from '../button';
import { getServerData, postContent } from 'utils';
import useForm from '../../hooks/useForm';
import Loading from '../shared/isLoading';
import Toast from '../shared/toast';
import useGlobalStyle from '../../styles';
import Links from './links';
import { useEffect, useState } from 'react';

export default function CentreContact({ centreId, id, centreSlug }) {
    const globalStyle = useGlobalStyle();
    const createForm = useForm(submit);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [hasProctor, setHasProctor] = useState();
    useEffect(() => {
        getExam();
    }, []);
    async function getExam() {
        setMessage('');
        try {
            const { data } = await getServerData(`/exam/${id}`);
            setHasProctor(data.hasProctor);
        } catch ({ message }) {
            setMessage(message);
        }
    }

    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            const { message } = await postContent({
                url: `/centre/${centreId}/exam/${id}/activate-proctoring`,
                data: createForm.values,
            });
            setMessage(message);
            setIsLoading(false);
            getExam();
        } catch ({ message }) {
            setMessage(message);
            setIsLoading(false);
        }
    }

    return (
        <div>
            <Links centreSlug={centreSlug} title="Proctoring" />
            <div style={{ padding: '40px 20px 0 20px' }}>
                <div
                    style={{ color: '#999999', fontSize: 16, marginBottom: 20 }}
                >
                    When you activate proctored technology, the system will take
                    random shots of your candidates when taking the exam at
                    intervals.
                </div>
                <div>
                    <strong>Note: </strong>
                    <span>
                        You will be charged N100 per subscriber when you use the
                        Proctored technology to supervise your exam.
                    </span>
                </div>
                <div className={`${globalStyle.mt15px}`}>
                    {!hasProctor ? (
                        <Button
                            onClick={createForm.submit}
                            color="primary"
                            variant="contained"
                        >
                            Click to Activate Proctored Technology{' '}
                            {isLoading && <Loading />}
                        </Button>
                    ) : (
                        <div
                            className={`${globalStyle.bottom1rem} ${globalStyle.top1rem}`}
                        >
                            <span
                                style={{ padding: '10px 20px' }}
                                className={` ${globalStyle.bgPrimary}`}
                            >
                                Activated Proctored Technology
                            </span>
                        </div>
                    )}
                </div>
            </div>
            {message && <Toast message={message} />}
        </div>
    );
}
