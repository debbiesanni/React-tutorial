import TextField from '@material-ui/core/TextField';
import { InputHTMLAttributes } from 'react';
import useStyle from './style'; 

interface Props extends InputHTMLAttributes<any> {
    fullWidth?: boolean;
    labelWidth?: number;
    defaultValue?: any;
    value?: any;
    accept?: string;
    classNameInput?: any;
    helperText?: string;
    required?: boolean;
    variant?: 'filled' | 'outlined' | 'standard';
    className?: string;
    autoComplete?: string;
    style?: any;
    inputProps?: any;
}

export default function Input({
    type,
    placeholder,
    onChange,
    name,
    id,
    classNameInput,
    className,
    autoFocus,
    labelWidth,
    defaultValue,
    onKeyDown,
    accept,
    helperText,
    required,
    value,
    variant = 'standard',
    autoComplete,
    style,
    inputProps,
    fullWidth = true,
}: Props): JSX.Element {
    const styles = useStyle();
    return (
        <div className={`${className}`}>
            <TextField
                id={id}
                label={placeholder}
                variant={variant}
                name={name}
                onChange={onChange}
                defaultValue={defaultValue}
                fullWidth={fullWidth}
                type={type}
                style={style}
                className={classNameInput}
                value={value}
                onKeyDown={onKeyDown}
                autoFocus={autoFocus}
                autoComplete={autoComplete}
                inputProps={inputProps}
                helperText={helperText}
            />
        </div>
    );
}
