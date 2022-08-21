import { useState } from 'react';
import { convertToFormData } from 'utils';
import { ElementProps } from 'utils/interface';
import { UseForm } from './interface';

const useForm = (submitAction: Function): UseForm => {
    const [values, setValue] = useState<any>({});  

    const getData = (e: ElementProps): void => {
        setValue({
            ...values,
            [e.target.id || e.target.name]: e.target.value || e.target.checked,
        });
    };
    const getEditor = (body: Record<string, unknown>, name: string): void => {
        values[name] = body;
        setValue({ ...values });
    };
    const setData = (field: string, data: string): void => {
        values[field] = data;
        setValue({ ...values });
    };
    const check = (e: ElementProps): void => {
        setValue({
            ...values,
            [e.target.id || e.target.name]: e.target.checked,
        });
    };
    const getFile = (e: { target: HTMLInputElement }) => {
        setValue({
            ...values,
            [e.target.id]: e.target.files[0],
        });
    };
    const filter = (record = null): void => {
        const filledValues = record || values;

        Object.keys(filledValues).forEach((key) => {
            if (!filledValues[key]) delete filledValues[key];
        });
        if (record) return filledValues;
        setValue(filledValues);
    };
    const submit = (e): void => {
        if (e) e.preventDefault();
        submitAction();
    };
    const setDefault = (defaultValues: Record<string, unknown>): void => {
        setValue({ ...values, ...defaultValues });
    };
    const formData = (): FormData => {
        return convertToFormData(values);
    };

    return {
        values,
        getData,
        setData,
        check,
        submit,
        getFile,
        setDefault,
        formData,
        getEditor,
        filter,
    };
};

export default useForm;
