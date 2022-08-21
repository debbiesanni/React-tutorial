
import useStyle from './style';
import useGlobalStyle from '../../styles';
import Button from '../button';
import { useRouter } from 'next/router';

interface Props {
    redirect?: string;
}

export default function Auth({redirect}: Props) {
    const globalStyle = useGlobalStyle();
    const router = useRouter();
    const style = useStyle();

    return (
        <div
            className={`${globalStyle.textAlignRight} ${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.justifyFlexEnd}`}
        >
            <span className={globalStyle.mr1rem}>
                <Button
                    variant="outlined"
                    color="primary"
                    style={{textTransform: 'none'}}
                    size="small"
                    className={style.button}
                    onClick={() => router.push(`/login${redirect ? redirect: ''}`)}
                >
                    Login
                </Button>
            </span> 

            <Button
                variant="contained"
                color="primary"
                style={{textTransform: 'none'}}
                size="small"
                className={style.button}
                onClick={() => router.push('/create-account?redirect=home')}
            >
                Create Account
            </Button>
        </div>
    );
}
