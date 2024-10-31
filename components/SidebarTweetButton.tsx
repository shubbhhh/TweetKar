"use client"
import useTweetModal from "@/hooks/useTweetModal";
import { Feather } from "lucide-react";
import { useCallback } from "react";

export default function SidebarTweetButton() {
    const tweetModal = useTweetModal();

    const onClick = useCallback(() => {
        tweetModal.onOpen()
        console.log(tweetModal.isOpen)
    }, [tweetModal])

    return (
        <div onClick={onClick}>
            <div className="mt-4 lg:hidden rounded-full h-14 w-14 flex items-center justify-center bg-sky-500 hover:bg-opacity-70 transition cursor-pointer">
                <Feather />
            </div>
            <div className="mt-6 hidden lg:block px-4 py-2 rounded-full bg-sky-500 hover:bg-opacity-90 cursor-pointer transition">
                <p className="hidden lg:block text-center font-semibold text-white text-[20px]">
                    Tweet
                </p>
            </div>
        </div>
    )
}