import useGlobalStyle from '../../../styles';
import useStyle from './style';

interface Props {
    icon?: JSX.Element;
    text: string;
    count?: number;
    className?: string;
}
export default function attribute({
    icon,
    text,
    count,
    className,
}: Props): JSX.Element {
    const style = useStyle();
    const globalStyle = useGlobalStyle();
    function oneKView(count) {
        function parseNumberFloat(divider, quantity) {
            let kView = String(count / divider);
            let view = kView.split('.');
            let remainder = view[1].split('');
            let remainderToNumber = parseInt(remainder[0]);
            return (
                view[0] +
                (remainderToNumber > 0 ? `.${remainderToNumber}` : '') +
                quantity
            );
        }
        if (count >= 1000000000) {
            return parseNumberFloat(1000000000, 'B');
        } else if (count >= 1000000) {
            return parseNumberFloat(1000000, 'M'); 
        } else return parseNumberFloat(1000, 'K');
    }
    return (
        <div
            className={`${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.bottom2px} ${className}`}
        >
            {icon}
            <span className={style.text}>
                {count >= 1000 ? oneKView(count) : <>{count > 0 ? count : 0}</>}
                <span style={{marginLeft: 5}}>{count >= 0 ? text : text.substr(0, text.length - 1)}</span>
            </span>
        </div>
    );
}
