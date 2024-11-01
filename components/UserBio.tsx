import { useUser } from "@/hooks/useUser"
import ActionButton from "./ActionButtons"
import { Button } from "./ui/button"
import useCurrentUser from "@/hooks/useCurrentUser"



export default function UserBio({ user }: { user?: User }) {
    const currUser = useCurrentUser();
    // console.log(user?.creation)

    return (
        <div className="border-b pb-4">
            <div className="flex justify-end p-2">
                {(currUser?.data.id != user?.id ) ?
                <Button 
                    className="rounded-full px-6" 
                    variant={"outline"}
                >
                    Follow
                </Button> :
                <Button 
                    className="rounded-full px-6" 
                    variant={"outline"}
                >
                    Edit
                </Button>
                } 
            </div>
            <div className="px-4 pt-4">
                <p className="text-xl font-semibold">
                    {user?.name || "Name    "}
                </p>
                <p className="text-sm font-light text-neutral-400 hover:underline">
                    @{user?.username || "username"}
                </p>
                <p>
                    {user?.details || "Bio"}
                </p>
                <div className="flex gap-4 pt-4">
                    <div className="font-semibold text-sm">
                        0 Followers
                    </div>
                    <div className="font-semibold text-sm">
                        0 Following
                    </div>
                    <div className="text-neutral-400 text-sm">
                        Joined MM YYYY
                    </div>
                </div>
            </div>
        </div>
    )
}