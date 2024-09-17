"use client"

import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import { useEffect } from "react";
import { useEditor } from "@/hooks/useEditor";
import { Modules } from '@/lib/editorModules';


export default function Editor() {
    const { editorRef, setEditorContent, getEditorContent, initializeEditor } = useEditor();

    useEffect(() => {
        initializeEditor();
    }, [initializeEditor])

    return (
        <div className='w-full'>
            <div id="editor" ref={editorRef}></div>
            {/* <div className='m-2'>
                <ReactQuill
                    theme="bubble"
                    placeholder="Tell your story..."
                    className="tracking-wide text-main bg-transparent font-light custom-quill"
                    modules={Modules}
                ></ReactQuill>
            </div> */}
        </div>
    )
};