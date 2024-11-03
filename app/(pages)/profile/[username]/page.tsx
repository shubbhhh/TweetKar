"use client"

import Header from "@/components/Header"
import UserBio from "@/components/UserBio";
import UserHero from "@/components/UserHero";
import { useUsername } from "@/hooks/useUsername";
import { Loader } from "lucide-react";

export default function UserProfile({ params }: { params: { username: string} }) {
    const username = params.username;
    console.log(username)

    const { data: fetchedUser, isLoading } = useUsername(username);
    console.log(fetchedUser)

    if(isLoading) {
        return <Loader />
    }

    return (
        <>
            <Header showBackArrow label={`${fetchedUser.username}`} />
            <UserHero user={fetchedUser}/>
            <UserBio user={fetchedUser} />
        </>
    )
}