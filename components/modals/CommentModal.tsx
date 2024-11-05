"use client"

import useCommentModal from "@/hooks/useCommentModal";
import InputTextArea from "../InputTextArea";
import { X } from "lucide-react";
import { useCallback } from "react";


export default function CommentModal() {
    const commentModal = useCommentModal();

    const body = (
        <div className="flex p-2 gap-2 items-start bg-white rounded-lg">
            <InputTextArea />
        </div>
    )

    return (
        <>
        <PostComment 
            disabled={false}
            isOpen={commentModal.isOpen}
            title="Comment"
            onClose={commentModal.onClose}
            onSubmit={() => {}} 
            body={body}
        />
        </>
    )
}

interface ModalProps {
    isOpen?: boolean,
    onClose: () => void,
    onSubmit: () => void,
    title?: string,
    body?: React.ReactElement,
    disabled?: boolean,
}

function PostComment({ isOpen, onClose, title, body, disabled, }: ModalProps) {
    const handleClose = useCallback(() => {
        if (disabled) return;

        onClose();
    }, [disabled, onClose])

    if (!isOpen) {
        return;
    }

    return (
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-neutral-100 bg-neutral-100 bg-opacity-70">
            <div className="relative w-full md:w-1/3 md:h-auto my-6 mx-auto md:max-w-3xl h-full lg:h-auto bg-white rounded-lg">
                <div className="h-full lg:h-auto rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                    {/* Header */}
                    <div className="flex items-center justify-between px-8 py-5 rounded-t">
                        <h3 className="text-3xl font-semibold">
                            {title}
                        </h3>
                        <button onClick={handleClose}>
                            <X />
                        </button>
                    </div>
                    {/* Body */}
                    <div className="relative px-4 flex-auto">
                        {body}
                    </div>
                </div>
            </div>
        </div>
    )
}