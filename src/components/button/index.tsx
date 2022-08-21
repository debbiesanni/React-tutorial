import MuiButton from '@material-ui/core/Button';
import { PropTypes } from '@material-ui/core';

interface Props {
    children: React.ReactNode;
    color?: PropTypes.Color;
    endIcon?: React.ReactNode;
    fullWidth?: boolean;
    size?: 'small' | 'medium' | 'large';
    startIcon?: React.ReactNode;
    variant?: 'text' | 'outlined' | 'contained';
    className?: string;
    style?: any;
    onClick?: Function;
    disableRipple?: boolean;
    disableFocusRipple?: boolean
}

const Button = ({
    children,
    color,
    endIcon,
    fullWidth,
    size,
    startIcon,
    variant,
    className,
    onClick,
    style,
    disableRipple,
    disableFocusRipple
}: Props): JSX.Element => {
    return (
        <MuiButton
            color={color}
            variant={variant}
            endIcon={endIcon}
            startIcon={startIcon}
            disableRipple={disableRipple}
            disableFocusRipple={disableFocusRipple}
            style={style}
            size={size}
            fullWidth={fullWidth}
            onClick={() => {
                if (typeof onClick === 'function') onClick();
            }}
            className={className}
        >
            {children}
        </MuiButton>
    );
};

export default Button;
