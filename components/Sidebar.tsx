import { getServerSession } from "next-auth";
import NavControls from "./NavbarControls";
import { House } from "lucide-react";
import SidebarLogo from "./SidebarLogo";


export default async function Sidebar() {
    const items = [
        {
            label: "Home",
            href: "/",
            icon: House
        },
        {
            label: "Notification",
            href: "/notifications",
            icon: House
        },
        {
            label: "Profile",
            href: "/user",
            icon: House
        }
    ]

    return (
        <div className="col-span-1 h-full pr-4 md:pr-6 bg-slate-300">
            <div className="flex flex-col items-end">
                <div className="space-y-2 lg:w-[230px]">
                    <SidebarLogo />
                </div>
            </div>
        </div>
    )
}