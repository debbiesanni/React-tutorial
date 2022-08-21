import useGlobalStyle from '../../styles';
import Dialog from '../dialog';
import useDialog from '../../hooks/useDialog';
import AddBtn from '../addBtn';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { postContent, getServerData } from 'utils';
import useForm from '../../hooks/useForm';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Switch from '../shared/mapSwitch';
import Loading from '../shared/isLoading';
import Toast from '../shared/toast';
import Input from '@components/shared/input';

const fetchCategories = async ({ queryKey }) => {
    const [, centreId, token] = queryKey;
    const categories = await getServerData(
        `/centre/${centreId}/exam-categories`,
        { token }
    );
    return categories;
};

export default function CentreContact({
    centreId,
    leagueId,
    token,
    examList,
    setExamList,
}) {
    const globalStyle = useGlobalStyle();
    const createForm = useForm(submit);
    const { isOpen, openDialog, closeDialog } = useDialog();
    const [exams, setExams] = useState([]);
    const [loading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    const switchContent = [
        {
            name: 'randomiseQuestion',
            label: 'Allow Randomise Question',
            onChange: createForm.check,
        },
        {
            name: 'randomiseOption',
            label: 'Allow Randomise Option',
            onChange: createForm.check,
        },
    ];

    const fetchExams = async (categoryId) => {
        setMessage('');
        const data = await getServerData(
            `/centre/${centreId}/exam-category/${categoryId}/exams`,
            { token }
        );
        setExams(data.data.exams);
        return exams;
    };
    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            delete createForm.values.categoryId;
            const { data } = await postContent({
                url: `/centre/${centreId}/league/${leagueId}/exam`,
                data: createForm.values,
            });
            console.log(data);
            examList.push(data);
            setExamList([...examList]);
            setMessage(data.message);
            // window.location.reload();
            setIsLoading(false);
            closeDialog();
        } catch ({ message }) {
            setMessage(message);
            setIsLoading(false);
            closeDialog();
        }
    }

    const { isLoading, error, data } = useQuery(
        ['categories', centreId, token],
        fetchCategories,
        {
            staleTime: 5,
        }
    );
    const handleChange = (event) => {
        createForm.setDefault({ categoryId: event.target.value });
        fetchExams(event.target.value);
    };
    const form = [
        {
            placeholder: 'Exam Question Limit',
            name: 'questionLimit',
            type: 'number',
            labelWidth: 150,
            onChange: createForm.getData,
        },
        {
            placeholder: 'Exam Duration',
            name: 'duration',
            type: 'number',
            labelWidth: 150,
            onChange: createForm.getData,
        },
    ];

    const addContect = (
        <div>
            <Input
                placeholder="Enter exam ID"
                name="examId"
                type="text"
                labelWidth={150}
                onChange={(e) => createForm.getData(e)}
            />
            <Input
                placeholder="Exam Question Limit"
                name="questionLimit"
                type="number"
                labelWidth={150}
                onChange={(e) => createForm.getData(e)}
            />
            <Input
                placeholder="Exam Duration"
                name="duration"
                type="number"
                labelWidth={150}
                onChange={(e) => createForm.getData(e)}
            />
            <div className={globalStyle.displayFlex}>
                <Switch content={switchContent} />
            </div>
        </div>
    );
    const value = <>Add new Exam {loading && <Loading />}</>;
    return (
        <div>
            <AddBtn text="Add New Exam" onClick={openDialog} />
            <Dialog
                handleClose={closeDialog}
                open={isOpen}
                content={addContect}
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
}
