"use client"

import 'react-quill/dist/quill.bubble.css';
import { useEffect } from "react";
import { useEditor } from "@/hooks/useEditor";

export default function Editor() {
    const { editorRef, setEditorContent, getEditorContent, initializeEditor } = useEditor();

    useEffect(() => {
        initializeEditor();
    }, [initializeEditor])

    return (
        <div className='w-full'>
            <div id="editor" ref={editorRef}></div>

        </div>
    )
};