import { getServerSession } from "next-auth";
import { House, Bell, User, LogOut } from "lucide-react";
import SidebarLogo from "./SidebarLogo";
import { Button } from "./ui/button";
import SidebarItem from "./SidebarItem";


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
            icon: Bell
        },
        {
            label: "Profile",
            href: "/user",
            icon: User
        }
    ]

    return (
        <div className="col-span-1 h-full pr-4 md:pr-6">
            <div className="flex flex-col items-end">
                <div className="space-y-2 lg:w-[230px]">
                    <SidebarLogo />
                </div>
                <div className="items-center">
                    {items.map(
                        (item, index) => (
                            <SidebarItem 
                                key={index} 
                                label={item.label}
                                href={item.href} 
                                icon={item.icon}
                            />
                        )
                    )}
                    <div className="relative hidden lg:flex gap-4 p-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer items-center w-full">
                        <LogOut />
                        <p className="hidden lg:block text-xl">
                            Logout
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}