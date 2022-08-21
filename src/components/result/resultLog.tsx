import Dialog from '../dialog';
import useDialog from '../../hooks/useDialog';
import useGlobalStyle from '../../styles';
import ResultActiviteLog from './resultActivitieLog';
import ProctoringLog from './proctoringLog';
import Tab from '../shared/tab';

export default function CentreContact({ result, centreId }) {
    const globalStyle = useGlobalStyle();
    const { closeDialog, openDialog, isOpen } = useDialog();
    const addContent = (
        <Tab
            tabs={['Activity Log', 'Proctored captures']}
            tabPanel={[
                <ResultActiviteLog result={result} />,
                <ProctoringLog id={result.id} centreId={centreId} />,
            ]}
            defaultActive={true}
            line={true}
            singleTabStyle={{ width: 700 }}
        />
    );
    return (
        <div>
            <div
                className={`${globalStyle.dropdown}`}
                onClick={() => openDialog(true)}
            >
                Result Log
            </div>
            <Dialog
                content={addContent}
                open={isOpen}
                handleClose={closeDialog}
                title="Update Question Score"
                size="sm"
                buttons={[
                    {
                        value: 'Close',
                        onClick: () => closeDialog(),
                    },
                ]}
            />
        </div>
    );
}
