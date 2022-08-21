import Input from '@components/shared/input';
import useGlobalStyle from '../../styles';
import InputMap from '../shared/mapForm';

interface Props {
    createForm?: any;
}

export default function CentreContact({ createForm }: Props) {
    const globalStyle = useGlobalStyle();

    // const rangeInput = [
    //     {
    //         placeholder: 'Enter Minimum',
    //         name: 'min',
    //         type: 'text',
    //         labelWidth: 150,
    //         onChange: createForm.getData,
    //         defaultValue: createForm.values.min,
    //     },
    //     {
    //         placeholder: 'Enter Maximum',
    //         name: 'max',
    //         type: 'text',
    //         labelWidth: 170,
    //         onChange: createForm.getData,
    //         defaultValue: createForm.values.max,
    //     },
    // ];

    return (
        <div className={globalStyle.top1rem}>
            <Input
                placeholder="Enter Minimum"
                name="min"
                type="text"
                labelWidth={150}
                onChange={(e) => createForm.getData(e)}
                defaultValue={createForm.values.min}
            />

            <Input
                placeholder="Enter Maximum"
                name="max"
                type="text"
                labelWidth={170}
                onChange={(e) => createForm.getData(e)}
                defaultValue={createForm.values.max}
            />
        </div>
    );
}
