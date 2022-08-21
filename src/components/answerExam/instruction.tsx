import useGlobalStyle from '../../styles';
import useStyle from './style';
import Button from '../button';
import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline';
import BackToPage from '../shared/backToPage';
import Loading from '../shared/isLoading';
import useForm from '../../hooks/useForm';
import Dialog from '../dialog';
import useDialog from '../../hooks/useDialog';
import { useState, useEffect, useRef } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

export default function AnswerPage({
    setQuestions,
    setInstruction,
    name,
    instruction,
    duration,
    questionCount,
    sectionCount,
    leagueId,
    centreId,
    centreSlug,
    leagueSlug,
    examId,
    examSlug,
    allowCustomDuration,
    allowCustomQuestionLength,
    setDuration,
    setQuestionLength,
}) {
    const globalStyle = useGlobalStyle();
    const style = useStyle();
    const createForm = useForm(submit);
    const [isLoading, setIsLoading] = useState(false);
    const { closeDialog, openDialog, isOpen } = useDialog();
    function submit() {
        allowCustomDuration && setDuration(createForm.values.duration);
        allowCustomQuestionLength &&
            setQuestionLength(createForm.values.questionLength);
        setInstruction(false);
        setQuestions(true);
    }

    const addContect = (
        <div>
            {allowCustomQuestionLength && (
                <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">
                        Question Length
                    </InputLabel>
                    <OutlinedInput
                        type="number"
                        name="questionLength"
                        onChange={(e) => createForm.getData(e)}
                        labelWidth={120}
                    />
                </FormControl>
            )}
            {allowCustomDuration && (
                <div className={globalStyle.mt2rem}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">
                            Duration
                        </InputLabel>
                        <OutlinedInput
                            type="number"
                            name="duration"
                            onChange={(e) => createForm.getData(e)}
                            labelWidth={70}
                        />
                    </FormControl>
                </div>
            )}
        </div>
    );
    const value = <> Start {isLoading && <Loading />}</>;
    return (
        <>
            <div className={`${style.examWidth}`}>
                <BackToPage />
                <h1 className={`${globalStyle.top1rem} ${style.name}`}>
                    {name}
                </h1>
                <div
                    className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw}`}
                >
                    {duration && (
                        <strong
                            className={`${globalStyle.top1rem} ${style.time}`}
                        >
                            {duration} Minute{duration > 1 && 's'}
                        </strong>
                    )}
                    {sectionCount && (
                        <strong
                            className={`${globalStyle.top1rem} ${style.time}`}
                        >
                            {sectionCount} Sections
                        </strong>
                    )}

                    {questionCount && (
                        <strong
                            className={`${globalStyle.top1rem} ${style.time}`}
                        >
                            {questionCount} Questions
                        </strong>
                    )}
                </div>

                <div
                    className={`${globalStyle.top1rem} ${globalStyle.bottom1rem}`}
                >
                    <h2 className={style.name}>Instruction</h2>
                    {instruction ? (
                        <div
                            className={style.instruction}
                            dangerouslySetInnerHTML={{ __html: instruction }}
                        />
                    ) : (
                        <div className={style.instruction}>
                            'Kindly click on the start button to start exam'
                        </div>
                    )}
                </div>

                <Button
                    color="primary"
                    variant="contained"
                    onClick={() => {
                        allowCustomDuration || allowCustomQuestionLength
                            ? openDialog()
                            : setInstruction(false);
                        setQuestions(true);
                    }}
                >
                    Start <PlayCircleOutline />
                </Button>
            </div>{' '}
            <Dialog
                content={addContect}
                open={isOpen}
                handleClose={closeDialog}
                title={`Allow Customization of ${
                    allowCustomQuestionLength && 'Question length'
                } ${
                    allowCustomDuration && allowCustomQuestionLength && 'and'
                } ${allowCustomDuration && 'duration'}`}
                size="sm"
                buttons={[
                    {
                        value: value,
                        onClick: () => createForm.submit(),
                    },
                ]}
            />
        </>
    );
}
