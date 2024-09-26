"use client"
import { Twitter } from "lucide-react";
import { useRouter } from "next/navigation";


export default function SidebarLogo() {
    const router = useRouter();

    return (
        <div
            onClick={ () => router.push('/') } 
            className="m-4 flex gap-4 items-center justify-end hover:bg-opacity-10 cursor-pointer transition"
        >
            <Twitter color="#0ea5e9"/>
            <h1 className="hidden lg:block text-xl font-semibold text-sky-500">TweetKar</h1>
        </div>
    )
}