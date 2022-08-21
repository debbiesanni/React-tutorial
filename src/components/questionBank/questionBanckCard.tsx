import useGlobalStyle from '../../styles';
import Folder from '../folderIcon';
import useStyle from './style';
import Link from '../shared/link';
import Share from './share';
import { formatEventDate } from '../../utils';

export default function QuestionBank({
    centreId,
    centreSlug,
    name,
    id,
    createdAt,
}) {
    const globalStyle = useGlobalStyle();
    const style = useStyle();
    const slug = 'question_bank';

    return (
        <div className={`${globalStyle.displayFlex}`}>
            <div
                className={`${style.folder} ${globalStyle.bRadius50} ${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.justifyCenter}`}
            >
                <Folder className={globalStyle.colorWhite} />
            </div>
            <div className={globalStyle.ml1rem}>
                <Link
                    text={<h3>{name}</h3>}
                    link={`/${centreSlug}/${centreId}/${slug}/${id}/questions`}
                    className={globalStyle.blackColor}
                />
                <div
                    className={`${globalStyle.displayFlex} ${globalStyle.greyColor} ${globalStyle.alignItems}`}
                >
                    <Share centreId={centreId} questionBankId={id} />
                    <span>{formatEventDate(createdAt)}</span>
                </div>
            </div>
        </div>
    );
}
