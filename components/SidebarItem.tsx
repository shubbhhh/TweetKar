import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
import { LucideProps } from "lucide-react"
import { useRouter } from "next/navigation";
import { ForwardRefExoticComponent, RefAttributes, useCallback } from "react"

interface SidebarItemProps {
    label: string,
    href?: string,
    icon: string | ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>,
    onclick?: () => void,
    auth?: boolean
}

export default function SidebarItem({ label, href, icon: Icon, onclick, auth }: SidebarItemProps) {
    const { data: user } = useCurrentUser();
    const loginModal = useLoginModal();
    const router = useRouter();
    const handleClick = useCallback(() => {
        console.log(user)
        if (onclick) {
            return onclick;
        }
        
        if (auth && !user) {
            loginModal.onOpen();

        } else if (href) {
            router.push(href);
        }
    }, [router, onclick, href, loginModal, auth])

    return (
        <div
            onClick={handleClick} 
            className="flex flex-row items-center">
            <div className="relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:hidden">
                <Icon />
            </div>
            <div className="relative hidden lg:flex gap-4 p-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer items-center w-full">
                <Icon />
                <p className="hidden lg:block text-xl">
                    {label}
                </p>
            </div>
        </div>
    )
}