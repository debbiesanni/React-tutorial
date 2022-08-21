import { useState } from 'react';
import MuiDialog from '@material-ui/core/Dialog';
import Content from '@material-ui/core/DialogContent';
import Title from '@material-ui/core/DialogTitle';
import Actions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { PropTypes } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import useStyle from './style';

interface ActionProps {
    onClick: Function;
    color?: PropTypes.Color;
    value: string;
}

interface Props {
    content: JSX.Element | string;
    title?: string;
    buttons?: Array<ActionProps>;
    size: any;
    showDivider?: boolean;
    fullScreen?: boolean;
}

const Dialog = () => {
    const [isOpen, setIsOpen] = useState(false);
    const css = useStyle();

    const dialog = ({
        content,
        title,
        buttons,
        size,
        showDivider,
        fullScreen,
    }: Props) => (
        <MuiDialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
            fullScreen={fullScreen}
            maxWidth={ size || 'sm'}
        >
            {title && (
                <Title disableTypography>
                    <div className={css.title}>
                        <Typography variant="h6">{title}</Typography>
                        <IconButton onClick={() => setIsOpen(false)}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                </Title>
            )}
            <Content dividers={showDivider}>{content}</Content>
            {buttons && (
                <Actions>
                    {buttons.map(({ onClick, color, value }, index) => (
                        <Button
                            key={index.toString()}
                            onClick={() => onClick()}
                            color={color || 'primary'}
                        >
                            {value}
                        </Button>
                    ))}
                </Actions>
            )}
        </MuiDialog>
    );

    return {
        open: setIsOpen,
        Dialog: dialog,
    };
};

export default Dialog;
