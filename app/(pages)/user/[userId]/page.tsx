"use client"
import Avatar from "@/components/Avatar";
import Header from "@/components/Header"
import UserHero from "@/components/UserHero";
import { useUser } from "@/hooks/useUser";

export default function UserProfile({ params }: { params: { userId: string} }) {
    const { userId } = params;

    const { data: fetchedUser, isLoading } = useUser(userId);
    console.log(fetchedUser)

    return (
        <>
        <Header showBackArrow label={`${fetchedUser?.name}`} />
        <UserHero />
        <div className="p-4 w-fit h-fit">
            <Avatar isLarge hasBorder name={fetchedUser?.name || "Failed to fetch"} />
        </div>
        </>
    )
}