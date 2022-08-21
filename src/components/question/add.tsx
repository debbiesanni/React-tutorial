import { useState, useEffect, useRef } from 'react';
import useGlobalStyle from '../../styles';
import Dialog from '../dialog';
import useDialog from '../../hooks/useDialog';
import { Editor } from '../../utils/addon';
import AddBtn from '../addBtn';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import BooleanQuestion from './boolean';
import RangeQuestion from './range';
import MultiObjQuestion from './mulitObj';
import Solution from './solution';
import AddImage from './image';
import { postContent, updateServerData } from 'utils';
import useForm from '../../hooks/useForm';
import Loading from '../shared/isLoading';
import Toast from '../shared/toast';
import { uploadFile } from '../../utils';
import EditIcon from '../editIcon';
import Input from '@components/shared/input';

interface Props {
    centreId: string;
    questionBankId: string;
    setQuestions: Function;
    questions: any;
    update: boolean;
    question?: any;
    id?: string;
    index?: number;
}
export default function CentreContact({
    centreId,
    questionBankId,
    setQuestions,
    questions,
    update,
    id,
    question,
    index,
}: Props) {
    const globalStyle = useGlobalStyle();
    const form = useRef();
    const createForm = useForm(submit);
    const { isOpen, openDialog, closeDialog } = useDialog();
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [imageLink, setImage] = useState();
    const [show, setShow] = useState(false);
    const [solutionImageLink, setSolutionImageLink] = useState();
    const [sendEditor, setSendEditor] = useState();

    const handleChangeEditor = (input) => {
        const result: any = input;
        setSendEditor(result);
    };

    if (update) {
        useEffect(() => {
            createForm.setData('question', question?.question?.question);
            createForm.setData('type', question?.question?.type);
            createForm.setData('options', question?.question?.options);
            createForm.setData('answer', question?.question?.answer);
            createForm.setData('mark', question?.mark);
            createForm.setData('duration', question?.duration);
            createForm.setData('solution', question?.solution?.text);
            createForm.setData('image', question?.question?.image);
            createForm.setData('min', question?.question?.min);
            createForm.setData('max', question?.question?.max);
        }, [question]);
    }

    function resetFields() {
        delete createForm.values.question;
        delete createForm.values.type;
        delete createForm.values.solution;
        delete createForm.values.mark;
        delete createForm.values.duration;
        delete createForm.values.image;
        delete createForm.values.options;
        delete createForm.values.option;
        delete createForm.values.imageUrl;
        delete createForm.values.answer;
    }

    async function submit() {
        !show && delete createForm.values.image;
        setIsLoading(true);
        imageLink && createForm.setData('image', await uploadFile(imageLink));
        solutionImageLink &&
            createForm.setData('imageUrl', await uploadFile(solutionImageLink));
        let collectedData;
        if (sendEditor) {
            createForm.setData('question', sendEditor);
        } else createForm.setData('question', createForm.values.question);

        const {
            solution: text,
            question,
            type,
            mark,
            duration,
            image,
            answer,
            imageUrl,
            min,
            max,
            options,
        } = createForm.values;
        if (createForm.values.type === 'boolean') {
            collectedData = {
                question: { question, type, answer, image },
                mark,
                duration,
                solution: { imageUrl, text },
            };
        } else if (createForm.values.type === 'range') {
            collectedData = {
                question: { question, type, min, max, image },
                mark,
                duration,
                solution: { imageUrl, text },
            };
        } else if (createForm.values.type === 'theory') {
            collectedData = {
                question: { question, type, image },
                mark,
                duration,
                solution: { imageUrl, text },
            };
        } else if (
            createForm.values.type === 'objective' ||
            createForm.values.type === 'multichoice'
        ) {
            collectedData = {
                question: { question, type, image, options },
                mark,
                duration,
                solution: { imageUrl, text },
            };
        }
        !collectedData.duration && delete collectedData.duration
        !collectedData.mark && delete collectedData.mark
        setMessage('');
        try {
            let data;
            if (update) {
                collectedData?.question?.options?.map((e) => delete e.id);
                data = await updateServerData({
                    url: `/centre/${centreId}/question-bank/${questionBankId}/question/${id}`,
                    data: collectedData,
                });
                questions[index] = data.data;
                setQuestions([...questions]);
            } else {
                data = await postContent({
                    url: `/centre/${centreId}/question-bank/${questionBankId}/question`,
                    data: collectedData,
                });
                setQuestions([...questions, data.data]);
                resetFields();
            }
            setMessage(data.message);
            closeDialog();
            setIsLoading(false);
        } catch ({ message }) {
            setMessage(message);
            setIsLoading(false);
        }
    }

    const handleChange = (event) => {
        createForm.setDefault({ type: event.target.value });
    };

    let questionType;
    if (createForm.values.type === 'boolean') {
        questionType = <BooleanQuestion createForm={createForm} />;
    } else if (createForm.values.type === 'range') {
        questionType = <RangeQuestion createForm={createForm} />;
    } else if (
        createForm.values.type === 'objective' ||
        createForm.values.type === 'multichoice'
    ) {
        questionType = (
            <MultiObjQuestion createForm={createForm} update={update} />
        );
    }

    const addContect = (
        <form ref={form} onSubmit={(e) => createForm.submit(e)}>
            <FormControl
                variant="outlined"
                style={{
                    minWidth: '100%',
                }}
            >
                <InputLabel htmlFor="type">Question Type</InputLabel>
                <Select
                    className={globalStyle.bottom1rem}
                    native
                    value={createForm.values.type}
                    onChange={handleChange}
                    label="Question Type"
                    inputProps={{
                        name: 'type',
                        id: 'type',
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value="theory">Theory</option>
                    <option value="boolean">Boolean</option>
                    <option value="range">Range</option>
                    <option value="objective">Objective</option>
                    <option value="multichoice">Multi-Choice</option>
                </Select>
            </FormControl>
            <h3>Question</h3>
            <Editor
                data={createForm.values.question}
                name="question"
                setter={handleChangeEditor}
            />
            <AddImage
                defaultImage={createForm.values.image}
                id="image"
                setImage={setImage}
                show={show}
                setShow={setShow}
            />

            <Input
                placeholder="Enter Question Mark"
                name="mark"
                type="number"
                labelWidth={150}
                onChange={(e) => createForm.getData(e)}
                defaultValue={createForm.values.mark}
            />

            <Input
                placeholder="Enter Question Duration"
                name="duration"
                type="text"
                labelWidth={170}
                onChange={(e) => createForm.getData(e)}
                defaultValue={createForm.values.duration}
            />

            <div>{questionType}</div>
            <div
                className={`${globalStyle.borderTop} ${globalStyle.padding1rem} ${globalStyle.mt3rem}`}
            >
                <Solution
                    createForm={createForm}
                    setSolutionImageLink={setSolutionImageLink}
                />
            </div>
        </form>
    );

    const value = (
        <>
            {update ? 'Update Question' : 'Add new question'}{' '}
            {isLoading && <Loading />}
        </>
    );
    return (
        <div>
            {update ? (
                <EditIcon color="primary" onClick={() => openDialog()} />
            ) : (
                <AddBtn
                    text="Add a New Question"
                    onClick={() => {
                        setImage(null);
                        setShow(false);
                        resetFields();
                        openDialog();
                    }}
                />
            )}
            <Dialog
                handleClose={closeDialog}
                open={isOpen}
                content={addContect}
                title={update ? 'Update Question' : 'Add New Question'}
                size="md"
                buttons={[
                    {
                        value: value,
                        onClick: () => {
                            createForm.submit();
                        },
                    },
                ]}
            />
            {message && <Toast message={message} />}
        </div>
    );
}
