import IconButton from '../../iconButton';
import SearchIcon from '@material-ui/icons/Search';
interface Props{
    className?: string;
    onClick: Function;
    color?: "inherit" | "disabled" | "primary" | "secondary" | "action" | "error";
}
export default function Search({className, onClick, color}:Props):JSX.Element{
    return (
        <IconButton className={className} onClick={()=>onClick()}>
            <SearchIcon color={color ?  color :'primary'}/>
        </IconButton>
    )
}