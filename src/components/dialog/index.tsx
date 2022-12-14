import React, { useState } from 'react';
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
    value: unknown;
}

interface Props {
    content?: JSX.Element | string;
    title?: string;
    buttons?: Array<ActionProps>;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
    showDivider?: boolean;
    fullScreen?: boolean;
    open: boolean;
    handleClose: Function;
    children?: JSX.Element;
    goBack?: true | false;
}

const Dialog = ({
    content,
    title,
    buttons,
    size,
    showDivider,
    fullScreen,
    open,
    handleClose,
    children,
    goBack,
}: Props) => {
    const css = useStyle();

    return (
        <MuiDialog
            open={open}
            onClose={() => handleClose()}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
            fullScreen={fullScreen}
            maxWidth={size || 'sm'}
        >
            {title && (
                <Title disableTypography>
                    <div className={css.title}>
                        <Typography variant="h6" style={{ color: '#FF8019' }}>
                            {title}
                        </Typography>
                        {goBack ? (
                            <div
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: 20,
                                    cursor: 'pointer',
                                }}
                                onClick={() => handleClose()}
                            >
                                Go Back
                            </div>
                        ) : (
                            <IconButton onClick={() => handleClose()}>
                                <CloseIcon />
                            </IconButton>
                        )}
                    </div>
                </Title>
            )}
            <Content dividers={showDivider}>
                {content ? content : children}
            </Content>
            {buttons && (
                <Actions>
                    {buttons.map(({ onClick, color, value }, index) => (
                        <Button
                            key={index.toString()}
                            color={color || 'primary'}
                            onClick={() => onClick()}
                        >
                            {value}
                        </Button>
                    ))}
                </Actions>
            )}
        </MuiDialog>
    );
};

export default React.memo(Dialog);
