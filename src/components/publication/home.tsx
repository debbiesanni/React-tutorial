import useGlobalStyle from '../../styles';
import useStyle from './style';
import {useState, useEffect} from 'react';
import Input from '@components/shared/input';
import Toast from '../shared/toast';
import { updateServerData } from 'utils';
import { useRouter } from 'next/router';
import Dialog from '@components/dialog';
import useDialog from '@hooks/useDialog';
import { Auth } from '@utils/index';
import useForm from '@hooks/useForm';
import Loading from '../shared/isLoading';
import Button from '../button';
import Add from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import Editor from '../shared/ckEditor/editorOld';
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';

export default function Home({ publication, learnings, user }) {

    const globalStyle = useGlobalStyle();
    const style = useStyle();
    const createForm = useForm(createPublication);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const createPublicationLearningDialog = useDialog();
    const [message, setMessage] = useState("");
    const isManager = Auth(user).isManager(publication?.centreId as string);

    const publicationId = publication?.id

    useEffect(() => {
        createForm.setDefault({learnings: learnings?.toString()});
    },[learnings])

    async function createPublication() {
        setMessage('');
        try {
            const exlude = [
                '0',
            ];
            exlude.forEach((key) => delete createForm.values[key]);

            setIsLoading(true);
            const learnings = createForm.values.learnings;
            if (learnings && typeof learnings === 'string') {
                createForm.setData('learnings', createForm.values.learnings.split(','));
            }
            const { publication } = await updateServerData({
                url: `/centre/${router.query.centreId}/publication/${publicationId}`,
                data: {learnings: createForm.values.learnings},
            });
            setIsLoading(false);
            createPublicationLearningDialog.closeDialog();
            window.location.reload();
        } catch ({ message }) {
            setMessage(message);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className={`${globalStyle.top1rem} ${globalStyle.paddingLR1rem}`}>

            <div>
                <h1
                    className={`${globalStyle.pt1rem} ${globalStyle.bottom1rem}`}
                >
                    Table of Content
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
                            onClick={() => createPublicationLearningDialog.openDialog()}
                        >
                            Edit Table of Content
                        </Button>
                    :
                        <Button
                            className={style.singleViewButton}
                            startIcon={<Add />}
                            style={{textTransform: 'none'}}
                            size="small"
                            onClick={() => createPublicationLearningDialog.openDialog()}
                        >
                            Create Table of Content
                        </Button>
                    }
                </div>
            }
            <Dialog
                open={createPublicationLearningDialog.isOpen}
                handleClose={createPublicationLearningDialog.closeDialog}
                title={learnings?.length > 0 ? "Edit Table of Content" : "Add Table of Content"}
                size="sm" 
                buttons={[
                    {
                        value: learnings?.length > 0 ? <>Edit Content {isLoading && <Loading />}</> : <> Add Content {isLoading && <Loading />}</> ,
                        onClick: () => createPublication(),
                    },
                ]}
            >
                <form>
                    <label><strong>Table of Content(s)</strong></label>
                    <Editor
                        name="learnings"
                        setter={(e) => createForm.getData(e)}
                        data={createForm.values.learnings}
                    />
                    <label>Use comma to itemize each table of content e.g (content A, content B, content C)</label>
                </form>
            </Dialog>
            {message && <Toast message={message} />}
        </div>
    );
}
