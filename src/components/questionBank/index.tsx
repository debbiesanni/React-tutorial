import QuestionBankComponent from './questionBanckComponent';

export default function QuestionBank({
    centreId,
    centreSlug,
    questionBank,
    folderId
}) {
    return (
        <QuestionBankComponent
            centreId={centreId}
            centreSlug={centreSlug}
            questionBank={questionBank?.questionBanks}
            folderId={folderId}
        />
    );
}
