"use client"

import useTweetModal from "@/hooks/useTweetModal";
import Modal from "../Modal";
import InputTextArea from "../InputTextArea";


export default function TweetModal() {
    const tweetModal = useTweetModal();

    const body = (
        <div className="flex p-2 gap-2 items-start bg-white rounded-lg">
            <InputTextArea />
        </div>
    )

    const footer = (
        <div className="flex w-full">
            
        </div>
    )

    return (
        <Modal
            disabled={false}
            isOpen={tweetModal.isOpen}
            title="Tweet"
            actionLabel="Post"
            onClose={tweetModal.onClose}
            onSubmit={() => {}} 
            body={body}
            footer={footer}
        />
    )
}