"use client"
import { useUsers } from "@/hooks/useUsers";
import Avatar from "./Avatar";
import { Loader } from "lucide-react";

export default function FollowBar() {
    const { data: users, error, isLoading} = useUsers();

    if (!isLoading && !users) {
        return (
            <div className="flex items-center">
                <Loader />
            </div>
        )
    }

    return (
        <div className="px-6 py-4 hidden lg:block">
            <div className="bg-neutral-100 rounded-xl p-4">
                <h2 className=" text-xl font-semibold">Who to Follow!</h2>
                <div className="flex flex-col gap-6 mt-4">
                    {users?.map((item: User, index: number) => (
                        <Avatar key={index} name={item.name} username={item.username} />
                    ))}
                </div>
            </div>
        </div>
    )
}