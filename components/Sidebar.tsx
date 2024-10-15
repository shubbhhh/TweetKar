'use client'

import { House, Bell, User, LogOut } from "lucide-react";
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import LogoutButton from "./LogoutButton";
import SidebarTweetButton from "./SidebarTweetButton";
import useCurrentUser from "@/hooks/useCurrentUser";


export default function Sidebar() {
    const { data: user } = useCurrentUser();
    const items = [
        {
            label: "Home",
            href: "/",
            icon: House,
        },
        {
            label: "Notification",
            href: "/notifications",
            icon: Bell,
            auth: true
        },
        {
            label: "Profile",
            href: "/profile",
            icon: User,
            auth: true
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
                                auth={item.auth}
                            />
                        )
                    )}
                    {user &&
                        <LogoutButton />
                    }
                    <SidebarTweetButton />
                </div>
            </div>
        </div>
    )
}