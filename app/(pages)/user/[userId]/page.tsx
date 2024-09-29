"use client"
import Header from "@/components/Header"
import { useUser } from "@/hooks/useUser";
import axios from "axios";

export default function UserProfile({ params }: { params: { userId: string} }) {
    const { userId } = params;
    // const user = await axios.get(`http://localhost:3000/api/user/${userId}`)

    const { data: fetchedUser, isLoading } = useUser(userId);
    console.log(fetchedUser)

    return (
        <div>
            <Header showBackArrow label={`${fetchedUser?.name}`} /> 
        </div>
    )
}