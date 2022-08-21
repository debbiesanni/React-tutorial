import Dropdown from '../shared/dropdown';
import useGlobalStyle from '../../styles';
import Delete from '../shared/delete';
import { removeReviews } from '@redux/slice/review';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import useDialog from '@hooks/useDialog';
import Dialog from '@components/dialog';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useState, useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';
import { updateServerData } from 'utils';
import useForm from '../../hooks/useForm';
import Loading from '@components/shared/isLoading';
import Toast from '../shared/toast';

interface Props {
    id: string;
    currentReview: any;
}

export default function CategorySettings({
    id,
    currentReview,
}:Props) {
    const globalStyle = useGlobalStyle();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const { isOpen, closeDialog, openDialog } = useDialog();
    const editForm = useForm(editReview);
    const [value, setValue] = useState(0);

    useEffect(() => {
        editForm.setDefault(currentReview);
    }, [currentReview]);

    async function editReview() {
        setMessage('');
        const exclude = ['firstname','surname', 'avatar','createdAt','id','rating','replyCount','updatedAt','userId'];
        exclude.forEach((key) => delete editForm.values[key]);

        try {
            setIsLoading(true);
            const { data } = await updateServerData({
                url: `/review/${currentReview.id}`,
                data: editForm.values,
            });
            setMessage('Review edited successfully');
            setIsLoading(false);
            closeDialog();
        } catch ({ message }) {
            setMessage(message);
        }
    }

    const content = (
        <div>
            <div
                style={{ color: 'red', cursor: 'pointer' }}
                onClick={() => openDialog()}
            >
                Edit Review
            </div>
            <Delete
                name="Review"
                url={`review/${id}`}
                reduxCentreName={removeReviews}
                dataToDelete={currentReview}
            />
        </div>
    ); 
    return (
        <div>
            <Dialog
                handleClose={closeDialog}
                title="Edit Review"
                open={isOpen}
                size="sm"
                buttons={[
                    {
                        value: <>Edit Review {isLoading && <Loading />}</>,
                        onClick: () => editReview(),
                    },
                ]}
            >
                <>
                    <TextareaAutosize
                        aria-label="minimum height"
                        rowsMin={3}
                        cols={120}
                        name="comment"
                        placeholder="What's on your mind"
                        className={`${globalStyle.mt2rem} ${globalStyle.textArea}`}
                        defaultValue={editForm.values.comment}
                        onChange={(e) => editForm.getData(e)}
                    />
                    {editForm.values.rating > 0 &&
                        <div className={globalStyle.displayFlex}>
                        <h3 className={globalStyle.mr1rem}>
                            Change your Rating
                        </h3>
                        <Rating
                            name="rating"
                            value={value}
                            defaultValue={editForm.values.rating}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                                editForm.setDefault({ rating: newValue });
                            }}
                        />
                    </div>
                    }
                </>
                
            </Dialog>
            <Dropdown
                trigger={<MoreHoriz />}
                content={content}
                className={globalStyle.contactContainer}
                defaultSetting={true}
            />
            {message && <Toast message={message} />}
        </div>
    );
}
