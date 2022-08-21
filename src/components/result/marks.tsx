import useGlobalStyle from '../../styles';
import Dialog from '../dialog';
import useDialog from '../../hooks/useDialog';
import Image from '@components/shared/image';
import { getServerData } from 'utils';
import { useQuery } from 'react-query';

const fetchParticipantScript = async ({ queryKey }) => {
    const [, centreId, examId, token] = queryKey;
    const script = await getServerData(
        `/centre/${centreId}/exam/${examId}/questions`,
        { token }
    );
    return script;
};
interface Props {
    centreId?: string;
    examId?: string;
    token?: string;
    value?: string;
}

const CentreContact = ({ centreId, examId, token, value }: Props) => {
    const globalStyle = useGlobalStyle();
    const { closeDialog, openDialog, isOpen } = useDialog();

    const { isLoading, data, error } = useQuery(
        ['script', centreId, examId, token],
        fetchParticipantScript
    );

    const addExamContent = (
        <div>
            {data?.data?.sections?.map(({ questions, name }, index) => (
                <div key={index}>
                    <h2
                        className={globalStyle.textAlignCenter}
                        style={{ textDecoration: 'underline' }}
                    >
                        {name}
                    </h2>
                    {questions.map(({ question, mark }, index) => (
                        <div
                            key={index}
                            className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw}`}
                        >
                            <>
                                <div className={`${globalStyle.displayFlex} `}>
                                    <h3 className={globalStyle.mr1rem}>
                                        {++index}.
                                    </h3>
                                    <div
                                        className={`${globalStyle.boldFont}`}
                                        dangerouslySetInnerHTML={{
                                            __html: question?.question,
                                        }}
                                    />
                                </div>
                                {question?.image && (
                                    <Image
                                        src={question?.image}
                                        alt="image"
                                        width="400px"
                                        height="400px"
                                    />
                                )}
                            </>
                            <div>
                                {mark} {mark > 1 ? 'Marks' : 'Mark'}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
    return (
        <>
            <span
                onClick={() => openDialog()}
                className={` ${globalStyle.cursor} ${
                    value
                        ? globalStyle.dropdown
                        : `${globalStyle.primaryColor} ${globalStyle.ml1rem}`
                }`}
            >
                {value ? value : 'Click Me'}
            </span>
            <Dialog
                content={addExamContent}
                open={isOpen}
                handleClose={closeDialog}
                title="Question marks"
                size="md"
                buttons={[
                    {
                        value: 'Close',
                        onClick: () => closeDialog(),
                    },
                ]}
            />
        </>
    );
};
export default CentreContact;
