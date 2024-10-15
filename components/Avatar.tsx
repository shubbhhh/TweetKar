
interface AvatarProps {
    name: string
    email?: string
    isLarge?: boolean
    hasBorder?: boolean
}
export default function Avatar({ name, isLarge, hasBorder, email }: AvatarProps) {

    return (
        <div className={`${isLarge? "": "flex gap-2"} items-center`}>
            <div className={`bg-neutral-200 rounded-full p-4 ${isLarge? "h-28": "h-10"} ${isLarge? "w-28": "w-10"} ${hasBorder? "border-4 border-white": ""} flex items-center justify-center`}>
                {name[0]}
            </div>
            {isLarge? (
                <></>
                ) : (
                <div className="flex flex-col text-sm">
                <p className={`items-center ${isLarge? "p-2": ""}`}>
                    {name}
                </p>
                <p className="items-center text-neutral-300">
                    @{email}
                </p>
                </div>
            )}
        </div>
    )
}