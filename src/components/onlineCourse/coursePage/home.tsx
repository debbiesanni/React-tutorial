import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
import Editor from '../../shared/ckEditor/editorOld';
import useGlobalStyle from '../../../styles';
import ReadMore from 'read-more-react';
import {useState, useEffect} from 'react';
import Input from '@components/shared/input';
import Toast from '../../shared/toast';
import Dialog from '@components/dialog';
import useDialog from '@hooks/useDialog';
import useForm from '@hooks/useForm';
import Loading from '../../shared/isLoading';
import Button from '../../button';
import { useRouter } from 'next/router';
import { updateServerData } from 'utils';
import { Auth } from '@utils/index'; 
import Add from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

interface Props {
    learnings: string[];
    courseDetails: any; 
    user: any;
}

export default function PublicExam({
    learnings = [],
    courseDetails,
    user,
}: Props) {
    const globalStyle = useGlobalStyle();
    const router = useRouter();
    const { centreId } = router.query;
    const isManager = Auth(user).isManager(centreId as string);
    const [message, setMessage] = useState("");
    const createForm = useForm(createExpectation);
    const [isLoading, setIsLoading] = useState(false);
    const {isOpen, openDialog, closeDialog} = useDialog();

    useEffect(() => {
        createForm.setDefault({learnings: learnings?.toString()});
    },[learnings])

    async function createExpectation() {
        setMessage('');
        try {

            setIsLoading(true);
            const learnings = createForm.values.learnings;
            if (learnings && typeof learnings === 'string') {
                createForm.setData('learnings', createForm.values.learnings.split(','));
            }
            const { data } = await updateServerData({
                url: `/centre/${centreId}/course/${courseDetails?.id}`,
                data: createForm.values,
            });
            setIsLoading(false);
            closeDialog();
            window.location.reload();
        } catch ({ message }) {
            setMessage(message);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className={`${globalStyle.top1rem} ${globalStyle.paddingLR1rem}`}>
            <div className={globalStyle.bottom1rem}>
                <strong>About</strong>
            </div>

            <ReadMore text={courseDetails?.description} />

            <div>
                <h1
                    className={`${globalStyle.pt1rem} ${globalStyle.bottom1rem}`}
                >
                    What you will learn
                </h1>
                <div
                    className={`${globalStyle.displayFlex} ${globalStyle.flexWrp} ${globalStyle.justifySpaceBtw}`}
                >
                    {learnings?.map((content, index) => (
                        <div
                            className={`${globalStyle.pt1rem} ${globalStyle.pb1rem} ${globalStyle.borderBottom} ${globalStyle.greyColor} ${globalStyle.displayFlex} ${globalStyle.alignItems} flex50`}
                            key={index}
                        >
                            <CheckCircleOutline style={{ marginRight: 7 }} />
                            {content}
                        </div>
                    ))}
                </div>
            </div>
            
            {isManager &&
                <div style={{marginTop: '2rem'}}>
                    {learnings?.length > 0 ?
                        <Button
                            color="primary"
                            startIcon={<EditIcon />}
                            variant="contained"
                            size="small"
                            onClick={() => openDialog()}
                        >
                            Edit Learning
                        </Button>
                    :
                        <Button 
                            color="primary"
                            startIcon={<Add />}
                            variant="contained"
                            size="small"
                            onClick={() => openDialog()}
                        >
                            Create Learning
                        </Button>
                    } 
                </div>
            }

            <Dialog
                open={isOpen}
                handleClose={closeDialog}
                title={learnings?.length > 0 ? "Edit Learning" : "Add Learning"}
                size="sm"
                buttons={[
                    {
                        value: learnings?.length > 0 ? <>Edit Learning {isLoading && <Loading />}</> : <> Add Learning {isLoading && <Loading />}</> ,
                        onClick: () => createExpectation(),
                    },
                ]}
            >  
                <form>
                    <label><strong>What to expect</strong></label>
                        <Editor
                            name="learnings"
                            setter={(e) => createForm.getData(e)}
                            data={createForm.values.learnings}
                        />
                    <label>Use comma to itemize each objective e.g (objective A, Objective B, objective C)</label>
                </form>
            </Dialog>
            {message && <Toast message={message} />}
        </div>
    );
}
