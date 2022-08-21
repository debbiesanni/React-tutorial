import React, { useEffect, useRef, useState } from "react";

interface Props {
  setter: any;
  name: any;
  maxLength?: number
}

export function Editor({ setter, name, maxLength }: Props) {
    const [editorLoaded, setEditorLoaded] = useState(false);
    const editorRef: any = useRef();
    const { CKEditor, ClassicEditor, ckeditor_wiris} = editorRef.current || {};

    useEffect(() => {
        setEditorLoaded(true);
        editorRef.current = {
        CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
        ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
        };
    }, []);

    return (
        <div>
            {editorLoaded ? (
            <CKEditor
              type=""
              name={name}
              editor={ClassicEditor}
              max={maxLength}
              data=""
              onChange={
                (event, editor) => {
                const data =  editor.getData();
                setter(data);
                // return ckResult
              }
            }
            />
            ) : (
                <div>Editor loading</div>
              )}
        </div>
    );
}
