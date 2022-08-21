import useGlobalStyle from '../../styles';
import Dialog from '../dialog';
import useDialog from '../../hooks/useDialog';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { getServerData, updateServerData } from 'utils';
import useForm from '../../hooks/useForm';
import Loading from '../shared/isLoading';
import Toast from '../shared/toast';
import { useState } from 'react';
import { useQuery } from 'react-query';

const fetchExams = async ({ queryKey }) => {
    const [, token] = queryKey;
    const categories = await getServerData(`/public-categories`, { token });
    return categories;
};
export default function CentreContact({ examId, centreId, token, setPrivate }) {
    const globalStyle = useGlobalStyle();
    const createForm = useForm(submit);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { closeDialog, openDialog, isOpen } = useDialog();
    const { data } = useQuery(['publicexams', token], fetchExams);
    async function submit() {
        try {
            setIsLoading(true);
            const data = await updateServerData({
                url: `/centre/${centreId}/exam/${examId}/make-public`,
                data: createForm.values,
            });
            setPrivate(data.data.isPrivate);
            setMessage(data.message);
            setIsLoading(false);
            closeDialog();
        } catch ({ message }) {
            setMessage(message);
            setIsLoading(false);
            closeDialog();
        }
    }

    let addContect = (
        <FormControl
            variant="outlined"
            style={{
                minWidth: '100%',
            }}
        >
            <InputLabel htmlFor="type">Public Category</InputLabel>
            <Select
                className={globalStyle.bottom1rem}
                native
                value={createForm.values.publicCategoryId}
                onChange={(e) => createForm.getData(e)}
                label="Question Type"
                inputProps={{
                    name: 'publicCategoryId',
                    id: 'publicCategoryId',
                }}
            >
                <option aria-label="None" value="" />
                {data?.data?.map(({ name, id }, index) => (
                    <option key={index} value={id}>
                        {name}
                    </option>
                ))}
            </Select>
        </FormControl>
    );

    const value = <>Make Public {isLoading && <Loading />}</>;
    return (
        <div>
            <strong onClick={() => openDialog()}>Make Public</strong>
            <Dialog
                content={addContect}
                open={isOpen}
                handleClose={closeDialog}
                title="Make Public"
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
