import { ReactElement, createElement, InputHTMLAttributes } from 'react';

interface Props {
    name?: string;
    id?: string;
    className?: string;
    placeholder?: string;
    required?: boolean;
    type: string;
    onChange: Function;
}

function Input({
    name,
    id,
    placeholder,
    required,
    type,
    className,
    onChange,
}: InputHTMLAttributes<any>): ReactElement {
    const InputProps: Props = { type, onChange };
    if (name) InputProps.name = name;
    if (id) InputProps.id = id;
    if (required) InputProps.required = required;
    if (placeholder) InputProps.placeholder = placeholder;
    if (className) InputProps.className = className;

    return createElement('input', InputProps);
}

export default Input;

{
    /* <NativeInput */
}
//   name="username"
//   placeholder="Enter your username"
//   type="text"
//   onChange={() => {
//     alert('yes');
//   }}
// />
