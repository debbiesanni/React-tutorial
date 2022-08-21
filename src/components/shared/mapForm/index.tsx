import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import useStyle from './style';

interface FormElement {
    type: 'text' | 'password' | 'file' | 'checkbox' | 'email' | 'number';
    placeholder: string;
    name?: string;
    id?: string;
    onChange: Function;
    labelWidth: number;
    defaultValue: string;
}

interface Props {
    form: FormElement[];
    handleChange: Function;
    content?: string;
    className?: string;
    flex100?: string;
}
export default function CentreContact({
    form,
    className,
    flex100,
}: Props): JSX.Element {
    const style = useStyle();
    return (
        <>
            {' '}
            {form.map(
                ({ placeholder, name, type, onChange, labelWidth,  defaultValue}, index) => (
                    <div
                        key={index}
                        className={`${style.top1rem} ${
                            flex100 && index === 0 ? flex100 : className
                        }`}
                    >
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">
                                {placeholder}
                            </InputLabel>
                            <OutlinedInput
                                type={type}
                                name={name}
                                onChange={() => onChange()}
                                labelWidth={labelWidth}
                                defaultValue={defaultValue}
                            />
                        </FormControl>
                    </div>
                )
            )}
        </>
    );
}
