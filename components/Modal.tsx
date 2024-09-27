import { useCallback } from "react";
import ActionButton from "./ActionButtons";
import { X } from "lucide-react";

interface ModalProps {
    isOpen?: boolean,
    onClose: () => void,
    onSubmit: () => void,
    title?: string,
    body?: React.ReactElement,
    footer?: React.ReactElement,
    actionLabel?: string,
    disabled?: boolean,
}

export default function Modal({ isOpen, onClose, onSubmit, title, body, footer, actionLabel, disabled }: ModalProps) {
    const handleClose = useCallback(() => {
        if (disabled) return;

        onClose();
    }, [disabled, onClose])

    const handleSubmit = useCallback(() => {
        if (disabled) return;

        onSubmit();
    }, [disabled, onSubmit]);

    if (!isOpen) {
        return;
    }

    return (
        <>
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-neutral-100 bg-neutral-100 bg-opacity-70">
            <div className="relative w-full lg:w-1/3 my-6 mx-auto lg:max-w-3xl h-full lg:h-auto bg-neutral-200 rounded-lg">
                <div className="h-full lg:h-auto rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                    {/* Header */}
                    <div className="flex items-center justify-between px-10 py-5 rounded-t">
                        <h3 className="text-3xl font-semibold">
                            {title}
                        </h3>
                        <button onClick={handleClose}>
                            <X />
                        </button>
                    </div>
                    {/* Body */}
                    <div className="relative px-10 flex-auto">
                        {body}
                    </div>
                    {/* Fotter */}
                    <div className="flex flex-col gap-2 px-10 py-5 items-center">
                        <ActionButton 
                            label="Login" 
                            onClick={handleSubmit} 
                            fullwidth 
                            secondary 
                        />
                        {footer}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}