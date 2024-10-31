import { useRouter } from "next/navigation"

interface AvatarProps {
    name: string
    username?: string
    profilePic?: string
    isLarge?: boolean
    hasBorder?: boolean
    showOnlyAvatar?: boolean
}
export default function Avatar({ name, isLarge, hasBorder, username, showOnlyAvatar }: AvatarProps) {
    const router = useRouter();

    if (showOnlyAvatar) {
        return (
            <div className={`${isLarge? "": "flex gap-2"} items-center`}>
                <div 
                    className={`bg-neutral-200 rounded-full p-4 ${isLarge? "h-28": "h-10"} ${isLarge? "w-28": "w-10"} ${hasBorder? "border-4 border-white": ""} flex items-center justify-center font-semibold`}
                    onClick={() => router.push(`/user/${username}`)}
                >
                    {name[0]}
                </div>
            </div>
        )
    }

    return (
        <div className={`${isLarge? "": "flex gap-2"} items-center`}>
            <div className={`bg-neutral-200 rounded-full p-4 ${isLarge? "h-28": "h-10"} ${isLarge? "w-28": "w-10"} ${hasBorder? "border-4 border-white": ""} flex items-center justify-center font-semibold`}>
                {name[0]}
            </div>
            {isLarge? (
                <></>
            ) : (
                <div className="flex flex-col text-sm">
                    <p className={`items-center font-semibold ${isLarge? "p-2": ""}`}>
                        {name}
                    </p>
                    <button 
                        className="items-center text-neutral-300 hover:underline"
                        onClick={() => router.push(`/profile/${username}`)}
                    >
                        @{username}
                    </button>
                </div>
            )}
        </div>
    )
}