import useGlobalStyle from '../../../styles';
import { kCount } from '../../../utils';
import Pluralize from '../pluralize';

interface Props {
    text: string | any;
    count?: number;
    subText?: string | number | JSX.Element;
    className?: string;
    textClassName?: string;
}
export default function attribute({
    text,
    count,
    subText,
    className,
    textClassName,
}: Props): JSX.Element {
    const globalStyle = useGlobalStyle();

    return (
        <div className={className}>
            <div
                className={`${globalStyle.greyColor} ${globalStyle.fontSize12} ${globalStyle.bottom2px} ${textClassName}`}
            >
                {Pluralize(text, count)}
            </div>
            <strong>
                {count >= 1000 ? kCount(count) : count} {subText}
            </strong>
        </div>
    );
}
