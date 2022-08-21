import useGlobalStyle from '../../../styles';
import ArrowBackIos from '../../arrowBack';
import { useRouter } from 'next/router';
interface Props {
    children?: JSX.Element;
}
export default function AnswerPage({ children }:Props) {
    const globalStyle = useGlobalStyle();
    const router = useRouter();

    return (
        <span
            onClick={() => router.back()}
            className={` ${globalStyle.primaryColor} ${globalStyle.cursor} ${
                children
                    ? `${globalStyle.displayFlex} ${globalStyle.alignItems}`
                    : ''
            }`}
        >
            {children ? (
                children
            ) : (
                <>
                    <ArrowBackIos /> Back
                </>
            )}
        </span>
    );
}
