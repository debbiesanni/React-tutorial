import IconButton from '@material-ui/core/IconButton';

interface Props {
    children: string | JSX.Element;
}

const Button = ({ children }: Props) => <IconButton>{children}</IconButton>;

export default Button;
