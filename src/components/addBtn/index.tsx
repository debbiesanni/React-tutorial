import useGlobalStyle from '../../styles';
import Button from '../button';
import Add from '../addIcon';

interface Props{
    text?: string | any,
    onClick?: Function;
    className?: any;
}
export default function Category({text, onClick, className}: Props) {
    const globalStyle = useGlobalStyle();
    return (
            <div className={`${globalStyle.bottom1rem}`}>
                <Button color="primary" onClick={onClick} variant="contained" size="small" className={className}>
                    <Add /> {text}
                </Button>
            </div>
    );
}
