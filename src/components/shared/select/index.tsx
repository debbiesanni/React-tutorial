import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputForm from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import { SelectHTMLAttributes } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import useStyle from '../input/style';

interface Props extends SelectHTMLAttributes<any> {
    fullWidth?: boolean;
    labelWidth?: number;
    defaultValue?: any;
    accept?: string;
    classNameInput?: any;
    helperText?: string;
    required?: boolean;
    variant?: 'filled' | 'outlined' | 'standard';
    value: string | number;
    children: JSX.Element;
}

export default function Input({
    placeholder,
    onChange,
    name,
    id,
    className,
    autoFocus,
    labelWidth,
    defaultValue,
    helperText,
    required,
    variant = 'standard',
    value,
    children,
}: Props): JSX.Element {
    const style = useStyle();

    return (
        <div className={`${style.top1rem} ${className}`}>
            <FormControl required={required} fullWidth variant={variant}>
                <InputLabel htmlFor={id || name}>{placeholder}</InputLabel>
                <Select
                    labelId={id}
                    id={id}
                    value={value}
                    onChange={onChange}
                    name={name}
                    // defaultValue={defaultValue}
                >
                    {children}
                </Select>
                {helperText && (
                    <FormHelperText id={id || name}>
                        {helperText}
                    </FormHelperText>
                )}
            </FormControl>
        </div>
    );
}
