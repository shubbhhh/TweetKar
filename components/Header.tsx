"use client"

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

interface HeaderProps {
    label: string,
    showBackArrow?: boolean
}

export default function Header( { label, showBackArrow }: HeaderProps ) {
    const router = useRouter();

    const handleBack = useCallback(() => {
        router.back();
    }, [ router ])

    return (
        <div className="border-b-[1px] border-neutral-100 p-5">
            <div className="flex flex-row items-center gap-2">
                {
                    showBackArrow && (
                        <ArrowLeft
                            onClick={handleBack}
                            size={20}
                            className="cursor-pointer hover:opacity-70 transition"
                        />
                    )
                }
                <h1 className="txt-xl font-semibold">{label}</h1>
            </div>
        </div>
    )
}