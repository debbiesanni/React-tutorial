import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

interface Props {
    label: string;
    name: string;
    handleChange: Function;
    defaultValue: boolean;
}
export default function SwitchLabels({
    label,
    name,
    handleChange,
    defaultValue,
}: Props): JSX.Element {

    return (
        <FormGroup row>
            <FormControlLabel
                control={
                    <Switch
                        checked={defaultValue}
                        onChange={(e) => handleChange(e)}
                        name={name}
                        color='primary'
                    />
                }
                label={label}
            />
        </FormGroup>
    );
}
