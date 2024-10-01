
interface AvatarProps {
    name: string
    isLarge?: boolean
    hasBorder?: boolean
}
export default function Avatar({ name, isLarge, hasBorder }: AvatarProps) {

    return (
        <div className={`${isLarge? "": "flex gap-2"}`}>
            <div className={`bg-neutral-300 rounded-full p-4 ${isLarge? "h-20": "h-10"} ${isLarge? "w-20": "w-10"} ${hasBorder? "border-4": ""} flex items-center justify-center`}>
                {name[0]}
            </div>
            <p className={`items-center ${isLarge? "p-2": ""}`}>
                {name}
            </p>
        </div>
    )
}