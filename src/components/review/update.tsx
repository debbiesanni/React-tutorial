import useGlobalStyle from '../../styles';
import useDialog from '../dialog/index.old';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Rating from '@material-ui/lab/Rating';
import useForm from '../../hooks/useForm';
import { getServerData } from '../../utils';

export default function CentreContact({centreId, id}) {
    const globalStyle = useGlobalStyle();
    const { Dialog, open } = useDialog();
    const createForm = useForm(submit);
    async function submit() {
        // const data = await getServerData({
        //     url: `/review/${centreId}`,
        //     data: createForm.values,
        // });
    }

    const addContect = (
        <div>
            <div className={globalStyle.greyColor}>Post a Comment</div>
            <TextareaAutosize
                aria-label="minimum height"
                rowsMin={3}
                cols={120}
                name="comment"
                placeholder="What's on your mind"
                className={`${globalStyle.mt2rem} ${globalStyle.textArea}`}
                onChange={() => createForm.getData()}
            />

            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.mt2rem}`}
            >
                <div className={globalStyle.displayFlex}>
                    <h3 className={globalStyle.mr1rem}>Leave your Rating</h3>
                    <Rating
                        name="rating"
                        value={createForm.values.rating}
                        onChange={(event, newValue) => {
                            createForm.setDefault({ rating: newValue });
                        }}
                    />
                </div>
            </div>
        </div>
    );
    return (
        <div>
            <div
                onClick={() => open(true)}
                className={`${globalStyle.dropdownList}`}
            >
                Update Category
            </div>
            <Dialog content={addContect} title="Update Category" size="sm" />
        </div>
    );
}
