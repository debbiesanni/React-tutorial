import useGlobalStyle from '../../styles';
import { postContent } from 'utils';
import useForm from '../../hooks/useForm';
import Dialog from '../dialog';
import useDialog from '../../hooks/useDialog';
import { useState } from 'react';
import Loading from '../shared/isLoading';
import Toast from '../shared/toast';
import Input from '../shared/input';
interface Props {
    folderId?: string;
    centreId: string;
    setExams?: any;
    exams: any;
}
export default function CentreContact({
    centreId,
    folderId,
    setExams,
    exams,
}: Props) {
    const globalStyle = useGlobalStyle();
    const createForm = useForm(submit);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { openDialog, closeDialog, isOpen } = useDialog();

    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            folderId && createForm.setData('folderId', folderId);
            const { data } = await postContent({
                url: `/centre/${centreId}/exam-folder`,
                data: createForm.values,
            });
            setExams([...exams, data]);
            setIsLoading(false);
            closeDialog();
            setMessage('Folder created successfully');
        } catch ({ message }) {
            setMessage(message);
            setIsLoading(false);
        }
    }
    const addContect = (
        <div>
            <Input
                placeholder="Enter Folder Name"
                name="name"
                type="text"
                onChange={(e) => createForm.getData(e)}
                labelWidth={140}
            />
        </div>
    );
    const value = <>Add New Folder {isLoading && <Loading />}</>;
    return (
        <div>
            <div
                onClick={() => openDialog()}
                className={`${globalStyle.dropdownList} ${globalStyle.bottom5px}`}
            >
                Create Exam Folder
            </div>
            <Dialog
                content={addContect}
                open={isOpen}
                handleClose={closeDialog}
                title="Add New Folder"
                size="sm"
                buttons={[
                    {
                        value: value,
                        onClick: () => createForm.submit(),
                    },
                ]}
            />
            {message && <Toast message={message} />}
        </div>
    );
}
