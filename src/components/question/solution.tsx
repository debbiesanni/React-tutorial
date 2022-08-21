import { useState } from 'react';
import useGlobalStyle from '../../styles';
import { Editor } from '../../utils/addon';
import Image from '../shared/imageUpload';

interface Props {
    createForm?: any;
    setSolutionImageLink?: any;
}

export default function SolutionContent({
    createForm,
    setSolutionImageLink,
}: Props) {
    const globalStyle = useGlobalStyle();
    const [show, setShow] = useState(false);
    const [solutionImage, setSolutionImage] = useState(false);
    const [sendEditor, setSendEditor] = useState('hello');

    const handleChangeEditor = (input) => {
        const result: any = JSON.stringify(input);
        setSendEditor(result);
    };
    // createForm.setData('solution', 'sendEditor')

    return (
        <div>
            <div
                className={`${globalStyle.textAlignRight} ${globalStyle.cursor} ${globalStyle.bottom2px}`}
            >
                <strong
                    className={globalStyle.mr1rem}
                    onClick={() => setShow(!show)}
                >
                    {show ? 'Remove' : 'Add'} Solution
                </strong>
            </div>
            {show && (
                <>
                    <h3>Solution</h3>
                    <Editor name="solution" setter={handleChangeEditor} />

                    <div
                        className={`${globalStyle.textAlignRight} ${globalStyle.cursor} ${globalStyle.bottom2px}`}
                    >
                        <strong
                            onClick={() => setSolutionImage(!solutionImage)}
                        >
                            {solutionImage ? 'Remove' : 'Add'} Image
                        </strong>
                    </div>
                    {solutionImage && (
                        <Image
                            id="solutionImg"
                            setImage={setSolutionImageLink}
                        />
                    )}
                </>
            )}
        </div>
    );
}
