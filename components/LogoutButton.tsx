"use client"

import useCurrentUser from "@/hooks/useCurrentUser";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";


export default function LogoutButton() {
    const { data: user } = useCurrentUser();

    if (!user) {
        return <></>
    }

    return (
        <div
            onClick={() => signOut()} 
            className="relative hidden lg:flex gap-4 p-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer items-center w-full">
            <LogOut />
            <p className="hidden lg:block text-xl">
                Logout
            </p>
        </div>
    )
}