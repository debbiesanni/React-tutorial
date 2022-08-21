import { useState } from 'react';
import useGlobalStyle from '../../styles';
import { Editor } from '../../utils/addon';
import Close from '../shared/closeIcon';
import AddImage from './image';
import CheckOption from '../shared/checkbox';

export default function CentreContact({ createForm, update }) {
    const globalStyle = useGlobalStyle();
    const [imageLink, setImage] = useState();
    const [show, setShow] = useState(false);
    let [options, setOptions] = useState(
        update ? createForm.values.options : []
    );

    return (
        <div>
            {options?.map((e, index) => (
                <div key={index}>
                    <div
                        onClick={() =>
                            (createForm.values.options = [...options])
                        }
                        className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw}`}
                    >
                        <CheckOption
                            onChange={(e) => {
                                if (createForm.values.type === 'objective') {
                                    options = options.map((option) => ({
                                        ...option,
                                        isCorrect: false,
                                    }));
                                }
                                options[index].isCorrect = e.target.checked;
                                createForm.values.options = [...options];
                                setOptions([...options]);
                            }}
                            answer={options[index].isCorrect ? true : false}
                            label={`Option
                            ${String.fromCharCode('A'.charCodeAt(0) + index)}`}
                        />
                        <span
                            onClick={() => {
                                options.splice(index, 1);
                                setOptions([...options]);
                            }}
                        >
                            <Close color="secondary" />
                        </span>
                    </div>
                    <Editor
                        data={
                            update ? createForm.values.options[index].value : ''
                        }
                        name="option"
                        setter={(e) => {
                            options[index].value = e;
                            setOptions([...options]);
                            createForm.values.options = options;
                        }}
                    />
                    <AddImage
                        id={`option${index}`}
                        defaultImage={options[index].image}
                        setOptions={setOptions}
                        options={options}
                        index={index}
                        show={show}
                        setShow={setShow}
                    />
                </div>
            ))}
            <div
                onClick={() =>
                    setOptions([...options, { value: '', isCorrect: false }])
                }
                className={`${globalStyle.cursor}`}
            >
                <strong>Add Option</strong>
            </div>
        </div>
    );
}
