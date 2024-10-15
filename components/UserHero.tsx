import Avatar from "./Avatar";

export default function UserHero({ user } : { user?: User }) {
    return (
        <div className="">
            <div className="bg-slate-200 h-44 relative">
                <div className="absolute -bottom-16 left-4">
                    <Avatar isLarge hasBorder name={user?.name || ""} email={user?.email || ""} />
                </div>
            </div>
        </div>
    )
}