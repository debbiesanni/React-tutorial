import IconButton from '@material-ui/core/IconButton';

interface Props {
    children: JSX.Element;
    className?: string;
    onClick: Function;
}
export default function Button({
    className,
    onClick,
    children,
}: Props): JSX.Element {
    return (
        <IconButton className={className} onClick={()=>onClick()}>
            {children}
        </IconButton>
    );
}
