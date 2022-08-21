import useGlobalStyle from '../../styles';
import useStyle from './style';
import Dialog from '../dialog';
import useDialog from '../../hooks/useDialog';

interface Props {
    submit: Function;
    setQuestions: boolean | any;
    setEndExam: boolean | any;
}

export default function CentreContact({
    submit,
    setQuestions,
    setEndExam
}: Props): JSX.Element {
    const globalStyle = useGlobalStyle();
    const { closeDialog, openDialog, isOpen } = useDialog();
    const style = useStyle();
    const addContect = (
        <div className={globalStyle.padding1rem}>
            <h2 className={globalStyle.textAlignCenter}>
                Are you sure you want to submit?
            </h2>
        </div>
    );
    return (
        <>
            <div
                onClick={() => openDialog()}
                className={`${style.endExam} ${globalStyle.danger} ${globalStyle.cursor}`}
            >
                End Exam
            </div>
            <Dialog
                content={addContect}
                open={isOpen}
                handleClose={closeDialog}
                title="Sure Submit?"
                size="sm"
                buttons={[
                    {
                        value: 'Cancel',
                        onClick: () => closeDialog(),
                    },
                    {
                        value: 'Sure Submit',
                        onClick: () => {
                            submit();
                            setQuestions(false);
                            setEndExam(true)
                        },
                    },
                ]}
            />
        </>
    );
}
