"use client"
import Header from "@/components/Header"
import UserBio from "@/components/UserBio";
import UserHero from "@/components/UserHero";
import { useUser } from "@/hooks/useUser";
import { Loader } from "lucide-react";

export default function UserProfile({ params }: { params: { userId: string} }) {
    const { userId } = params;

    const { data: fetchedUser, isLoading } = useUser(userId);
    console.log(fetchedUser)

    if(isLoading) {
        return <Loader />
    }

    return (
        <div>
            <Header showBackArrow label={`${fetchedUser?.name}`} />
            <UserHero user={fetchedUser}/>
            <UserBio user={fetchedUser} />
        </div>
    )
}