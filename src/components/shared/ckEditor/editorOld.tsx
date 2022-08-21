import React from 'react';

export const ckToolbar = {
    superscript: 'Superscript',
    subscript: 'Subscript',
    strikethrough: 'Strikethrough',
    code: 'Code',
    mathType: 'MathType',
    chemType: 'ChemType',
    numberedList: 'numberedList',
    blockQuote: 'blockQuote',
    bulletedList: 'bulletedList',
    mediaEmbed: 'mediaEmbed',
    insertTable: 'insertTable',
    undo: 'undo',
    redo: 'redo',
    paragraph: 'paragraph',
    link: 'Link',
    indent: 'indent',
    outdent: 'outdent',
    specialCharacters: 'SpecialCharacters',
    highlight: 'Highlight',
    horizontalLine: 'HorizontalLine',
    removeFormat: 'RemoveFormat',
};

interface Props {
    toolbar?: string[];
    setter: Function;
    name?: string;
    data: any;
    maxlength?: number
    rows?: number
}

function Editor({ toolbar = [], setter, name, data, maxlength, rows }: Props) {
    return (
        <textarea
            name={name}
            defaultValue={data}
            onChange={(e) => setter(e)}
            style={{width: '100%', padding: '.5rem'}}
            maxLength={maxlength}
            rows={rows}
        ></textarea>
    );
}

export default Editor; 
  