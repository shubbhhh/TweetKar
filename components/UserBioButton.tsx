import axios from "axios";
import { Button } from "./ui/button";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";


export default function UserBioButtion({ user }: { user: User }) {
    const currUser = useCurrentUser();
    console.log("Current: ", currUser)
    const [isFollowing, setIsFollowing] = useState<boolean>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        console.log("Visited: ", user)
        const following = user.subscribers?.some((item) => item.subscriberId == currUser.data.id)
        console.log("Isfollowing: ", following)
        setIsFollowing(following || false); 
    }, [currUser, user]);

    const handleFollow = useCallback(async () => {
        try {
            setIsLoading(true)
            if (isFollowing) {
                console.log("isFollowing:", isFollowing, 'deleting...')
                await axios.delete("/api/follow", {
                    data: {
                        userId: user.id
                    }
                });

                setIsFollowing(false);
            } else {
                console.log("isFollowing:", isFollowing, "posting...")
                await axios.post("/api/follow", {
                    userId: user.id
                });
    
                setIsFollowing(true);
            }
        } catch(error) {
            toast.error("Something went wrong!");
        } finally {
            console.log("Final follow:", isFollowing)
            setIsLoading(false);
        }
    }, [isFollowing])

    // To do: handle edit
    // const handleEdit

    const FollowButton = () => {
        return (
            <Button 
                className="rounded-full px-6 border hover:bg-sky-500 hover:border-sky-500 hover:text-white" 
                variant={"ghost"}
                onClick={handleFollow}
                disabled={isLoading}
            >
                Follow
            </Button>
        );
    }

    const UnfollowButton = () => {
        return (
            <Button 
                className="rounded-full px-6 border hover:bg-red-500 hover:border-red-500 hover:text-white" 
                variant={"ghost"}
                onClick={handleFollow}
                disabled={isLoading}
            >
                unfollow
            </Button>
        );
    }

    return (
        <div>
            {(currUser?.data.id != user?.id ) ? (
                isFollowing ? <UnfollowButton /> : <FollowButton />
            ) : (
                <Button
                    className="rounded-full px-6" 
                    variant={"outline"}
                >
                    Edit
                </Button>
            )}
        </div>
    )
}