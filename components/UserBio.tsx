import { useUser } from "@/hooks/useUser"
import ActionButton from "./ActionButtons"
import { Button } from "./ui/button"
import useCurrentUser from "@/hooks/useCurrentUser"
import UserBioButtion from "./UserBioButton"



export default function UserBio({ user }: { user: User }) {
    console.log("UserInBio: ", user)

    return (
        <div className="border-b pb-4">
            <div className="flex justify-end p-2">
                <UserBioButtion user={user} /> 
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
                        {user?.subscribers?.length} Followers
                    </div>
                    <div className="font-semibold text-sm">
                        {user?.subscribedTo?.length} Following
                    </div>
                    <div className="text-neutral-400 text-sm">
                        Joined {"MM YYYY"}
                    </div>
                </div>
            </div>
        </div>
    )
}