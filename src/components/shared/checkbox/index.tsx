import { useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

interface Props {
    onChange?: Function;
    label?: any;
    answer?: any;
}

export default function ControlledCheckBox({onChange, label, answer }: Props) {
    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={answer}
                    onChange={(e)=>onChange(e)}
                    name="answer"
                    color="primary"
                />
            }
            label={label}
        />
    );
}
