import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

interface Props {
    onChange: Function;
    label: string;
    id?: string;
    name?: string;
    checked: boolean;
    helperText?: string;
}

export default function ControlledCheckBox({
    onChange,
    label,
    checked,
    id,
    name,
    helperText,
}: Props) {
    return (
        <FormControl>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked}
                        onChange={(e) => onChange(e)}
                        name={name}
                        id={id || name}
                        color="primary"
                    />
                }
                label={label}
            />
            {helperText && (
                <FormHelperText id={id || name}>
                    {helperText}
                </FormHelperText>
            )}
        </FormControl>
        
    );
}
