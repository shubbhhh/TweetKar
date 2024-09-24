
interface SidebarItemProps {
    label: string,
    href?: string,
    icon: string,
    onclick?: () => void
}

export default function SidebarItem({ label, href, icon, onclick }: SidebarItemProps) {

    return (
        <div className="flex flex-row items-center">
            <div className="relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:hidden">
                {/* mobile view Icon only */}
            </div>
            <div className="relative hidden lg:flex gap-4 p-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer items-center">
                {/* Icon */}
                <p className="hidden lg:block text-xl">
                    {label}
                </p>
            </div>
        </div>
    )
}