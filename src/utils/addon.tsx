import React, { useEffect, useRef, useState } from 'react';

interface Props {
    data?: string;
    name: string;
    setter: Function;
}
export function Editor({ setter, name, data }: Props) {
    const [editorLoaded, setEditorLoaded] = useState(false);
    const editorRef: any = useRef();
    const { CKEditor, ClassicEditor, ckeditor_wiris } = editorRef.current || {};

    useEffect(() => {
        setEditorLoaded(true);
        editorRef.current = {
            CKEditor: require('@ckeditor/ckeditor5-react').CKEditor, // v3+
            ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
        };
    }, []);

    return (
        <div>
            {editorLoaded ? (
                <CKEditor
                    type=""
                    name={name}
                    editor={ClassicEditor}
                    data={data}
                    onChange={(event, editor) => {
                        const input = editor.getData() || data;
                        setter(input);
                        // return ckResult
                    }}
                />
            ) : (
                <div>Editor loading</div>
            )}
        </div>
    );
}
