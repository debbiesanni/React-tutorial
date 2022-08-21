import Button from '../button';
import useStyle from './style';
interface Data {
    title?: string;
    content1?: string;
    content2?: string;
    buttonText: string | any;
    onClick?: Function;
}

interface Props {
    data: Data; 
}

export default function LoginFooterCard({data}: Props) {
    const style = useStyle();
    return (
        <div className={style.loginFooterContainer}>
            <h2 className={style.loginFooterTitle}>{data.title}</h2>
            <div style={{padding: '1rem', height: '231px'}}>
                <p className={style.loginFooterContent}>{data.content1}</p>

                {data.content2 && <p className={style.loginFooterContent}>{data.content2}</p>}
            </div>
            
            <Button
                variant="outlined"
                color="default"
                style={{textTransform: 'none'}}
                onClick={data.onClick}
                className={style.loginFooterButton}
            >
                {data.buttonText}

            </Button>
        </div>
    )
}