import useLoginModal from "@/hooks/useLoginModal"
import { useCallback } from "react";

 
export default function SidebarSigninButton() {
    const loginModal = useLoginModal();
    
    const onClick = useCallback(() => {
        loginModal.onOpen()
    }, [loginModal])

    return (
        <div onClick={onClick}>
            <div className="mt-4 lg:hidden rounded-full h-14 w-14 flex items-center justify-center bg-sky-500 hover:bg-opacity-70 transition cursor-pointer">
                
            </div>
            <div className="mt-6 hidden lg:block px-4 py-2 rounded-full bg-sky-500 hover:bg-opacity-90 cursor-pointer transition">
                <p className="hidden lg:block text-center font-semibold text-white text-[20px]">
                    Sign-In
                </p>
            </div>
        </div>
    )
}