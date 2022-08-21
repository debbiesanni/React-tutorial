import IconButton from '../../iconButton';
import SearchIcon from '@material-ui/icons/Search';
interface Props{
    className?: string;
    onClick: Function;
}
export default function Search({className, onClick}:Props):JSX.Element{
    return (
        <IconButton className={className} onClick={()=>onClick()}>
            <SearchIcon fontSize='large' />
        </IconButton>
    )
}