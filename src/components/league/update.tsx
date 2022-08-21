import useGlobalStyle from '../../styles';
import Dialog from '../dialog';
import useDialog from '../../hooks/useDialog';
import { Editor } from '../../utils/addon';
import { updateServerData } from 'utils';
import useForm from '../../hooks/useForm';
import Edit from '../editIcon';
import Loading from '../shared/isLoading';
import Toast from '../shared/toast';
import { useEffect, useState } from 'react';
import Input from '@components/shared/input';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function Update({
    name,
    description,
    startDate,
    endDate,
    isSearchable,
    isPrivate,
    centreId,
    leagueId,
    price,
}) {
    const globalStyle = useGlobalStyle();
    const { isOpen, openDialog, closeDialog } = useDialog();
    const createForm = useForm(submit);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [sendEditor, setSendEditor] = useState();

    const handleChangeEditor = (input) => {
        const result: any = input;
        setSendEditor(result);
    };

    useEffect(() => {
        createForm.setData('name', name);
        createForm.setData('description', description);
        createForm.setData('startDate', startDate);
        createForm.setData('endDate', endDate);
        createForm.setData('isSearchable', isSearchable === 1 ? true : false);
        createForm.setData('price', price);
    }, [name, description, startDate]);
    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            createForm.setData(
                'description',
                sendEditor ? sendEditor : description
            );
            const { message } = await updateServerData({
                url: `/centre/${centreId}/league/${leagueId}`,
                data: createForm.values,
            });
            setMessage(message);
            setIsLoading(false);
            closeDialog();
            location.reload();
        } catch ({ message }) {
            setMessage(message);
            setIsLoading(false);
            closeDialog();
        }
    }

    const addContect = (
        <div>
            <Input
                placeholder="Enter League Name"
                name="name"
                type="text"
                labelWidth={140}
                onChange={(e) => createForm.getData(e)}
                defaultValue={createForm.values.name}
            />

            <Input
                placeholder="Enter League Start Date"
                name="startDate"
                type="datetime-local"
                labelWidth={170}
                onChange={(e) => createForm.getData(e)}
                value={
                    createForm.values.startDate
                        ? createForm.values.startDate.substring(
                              0,
                              createForm.values.startDate.length - 5
                          )
                        : ''
                }
            />

            <Input
                placeholder="Enter League End Date"
                name="endDate"
                value={
                    createForm.values.endDate
                        ? createForm.values.endDate.substring(
                              0,
                              createForm.values.endDate.length - 5
                          )
                        : ''
                }
                type="datetime-local"
                labelWidth={160}
                onChange={(e) => createForm.getData(e)}
            />
            <Input
                placeholder="Enter League price"
                name="price"
                type="number"
                labelWidth={140}
                onChange={(e) => createForm.getData(e)}
                defaultValue={createForm.values.price}
            />

            <Editor
                data={createForm.values.description}
                name="description"
                setter={handleChangeEditor}
            />
            <div className={globalStyle.displayFlex}>
                {/* <FormGroup row>
                    <FormControlLabel
                        control={
                            <Switch
                                defaultChecked={createForm.values.isPrivate}
                                onChange={(e) => createForm.check(e)}
                                name="isPrivate"
                                color="primary"
                            />
                        }
                        label="Make Private"
                    />
                </FormGroup> */}
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Switch
                                defaultChecked={createForm.values.isSearchable}
                                onChange={(e) => createForm.check(e)}
                                name="isSearchable"
                                color="primary"
                            />
                        }
                        label="Is Searchable"
                    />
                </FormGroup>
            </div>
        </div>
    );
    const value = <>Update league {isLoading && <Loading />}</>;
    return (
        <div>
            <Edit
                color="primary"
                onClick={openDialog}
            />
            <Dialog
                content={addContect}
                open={isOpen}
                handleClose={closeDialog}
                title="Update League"
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
