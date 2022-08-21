import Switch from '../../switch';

interface FormElement {
    label: string;
    name?: string;
    id?: string;
    onChange: Function;
    defaultValue: any;
}

interface Props {
    content: FormElement[] | any;
    className?: string;
}
 const mapSwitch = ({
    content,
    className,
}: Props) => {
    return (
        <>
            {content.map(({ label, name, onChange,  defaultValue,}, index) => (
                <span key={index} className={className ? className : null}>
                    <Switch
                        label={label}
                        name={name}
                        handleChange={onChange}
                        defaultValue={defaultValue}
                        
                    />
                </span>
            ))}
        </>
    );
}
export default mapSwitch;
