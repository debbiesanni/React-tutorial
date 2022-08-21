import useGlobalStyle from '../../styles';
import Dialog from '../dialog';
import useDialog from '../../hooks/useDialog';
import { Editor } from '../../utils/addon';
import Switch from '../shared/mapSwitch';
import { getServerData, postContent } from 'utils';
import useForm from '../../hooks/useForm';
import Loading from '../shared/isLoading';
import Toast from '../shared/toast';
import { useState } from 'react';
import Input from '@components/shared/input';
import { Button } from '@material-ui/core';
import { useEffect } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

interface Props {
    folderId?: string;
    centreId: string;
    exams?: any;
    setExams?: any;
    button?: boolean;
    reload?: boolean;
    isPrivate?: boolean | string;
}
const CentreContact = ({
    folderId,
    centreId,
    exams,
    setExams,
    button,
    reload,
    isPrivate,
}: Props) => {
    const globalStyle = useGlobalStyle();
    const createForm = useForm(submit);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { closeDialog, openDialog, isOpen } = useDialog();
    const [sendEditor, setSendEditor] = useState();
    const [category, setCategory] = useState([]);

    const handleChangeEditor = (input) => {
        const result: any = input;
        setSendEditor(result);
    };

    async function submit() {
        setMessage('');
        if (!createForm.values.duration) {
            setMessage('Duration is required');
        }
        try {
            setIsLoading(true);
            folderId && createForm.setData('folderId', folderId);
            createForm.setData('description', sendEditor);
            const data = await postContent({
                url: `/centre/${centreId}/exam`,
                data: createForm.values,
            });
            setMessage(data.message);
            setExams([...exams, data.data]);
            setIsLoading(false);
            closeDialog();
            if (reload) {
                window.location.reload();
            }
        } catch ({ message }) {
            setMessage(message);
            setIsLoading(false);
        }
    }
    const switchContent = [
        {
            name: 'isSearchable',
            label: 'Allow search',
            onChange: createForm.check,
        },
    ];
    useEffect(() => {
        const getCategory = async () => {
            try {
                const { data } = await getServerData(`/public-categories`);
                setCategory(data);
            } catch ({ message }) {
                setMessage(message);
            }
        };
        getCategory();
    }, []);
    const addExamContent = (
        <div>
            <Input
                placeholder="Enter Exam Name"
                name="name"
                type="text"
                onChange={(e) => createForm.getData(e)}
                labelWidth={140}
            />

            <Input
                placeholder="Enter Exam Duration in Minutes"
                name="duration"
                type="number"
                required
                onChange={(e) => createForm.getData(e)}
                labelWidth={150}
            />
            {(isPrivate === 'false' || isPrivate === false) && (
                <FormControl
                    variant="outlined"
                    style={{
                        minWidth: '100%',
                    }}
                >
                    <InputLabel htmlFor="publicCategoryId">
                        Public Category
                    </InputLabel>
                    <Select
                        className={globalStyle.bottom1rem}
                        native
                        value={createForm.values.publicCategoryId}
                        onChange={(e) =>
                            createForm.setDefault({
                                publicCategoryId: e.target.value,
                            })
                        }
                        label="Public Category"
                        inputProps={{
                            name: 'publicCategoryId',
                            id: 'publicCategoryId',
                        }}
                    >
                        <option aria-label="None" value="" />
                        {category.map(({ name, id }, index) => (
                            <option key={index} value={id}>
                                {name}
                            </option>
                        ))}
                    </Select>
                </FormControl>
            )}
            <h5>Description</h5>
            <Editor name="description" setter={handleChangeEditor} />
            <div className={globalStyle.displayFlex}>
                <Switch content={switchContent} />
            </div>
        </div>
    );
    const value = <>Add New Exam {isLoading && <Loading />}</>;
    return (
        <div>
            {button ? (
                <Button
                    onClick={() => openDialog()}
                    variant="contained"
                    color="primary"
                >
                    Add New Exam {isLoading && <Loading />}
                </Button>
            ) : (
                <div
                    onClick={() => openDialog()}
                    className={`${globalStyle.dropdownList}`}
                >
                    Add New Exam {isLoading && <Loading />}
                </div>
            )}
            <Dialog
                content={addExamContent}
                open={isOpen}
                handleClose={closeDialog}
                title="Add New Exam"
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
};
export default CentreContact;
