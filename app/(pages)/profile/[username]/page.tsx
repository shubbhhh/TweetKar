"use client"
import Header from "@/components/Header"
import UserBio from "@/components/UserBio";
import UserHero from "@/components/UserHero";
import { useUser } from "@/hooks/useUser";
import { Loader } from "lucide-react";

export default function UserProfile({ params }: { params: { username: string} }) {
    const { username } = params;

    // const { data: fetchedUser, isLoading } = useUser(username);
    console.log(username)

    // if(isLoading) {
    //     return <Loader />
    // }

    return (
        <div>
            {/* <Header showBackArrow label={`${fetchedUser?.name}`} />
            <UserHero user={fetchedUser}/>
            <UserBio user={fetchedUser} /> */}
        </div>
    )
}