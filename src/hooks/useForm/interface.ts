export interface UseForm {
    values: Record<string, any>;
    getData: Function;
    setData: Function;
    check: Function;
    submit: Function;
    getFile: Function;
    setDefault: Function;
    formData: Function;
    getEditor: Function;
    filter: Function;
}
