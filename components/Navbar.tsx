import { getServerSession } from "next-auth";
import NavControls from "./NavbarControls";


export default async function Navbar() {
    const user = await getServerSession();
    var isLoggedIn = true;

    if (!user) {
        isLoggedIn = false;
    }
    console.log(user, isLoggedIn)

    return (
        <div className="px-4 py-2 m-2 rounded-full flex items-center justify-between bg-[#f3f3f3]">
            <div className="flex gap-2 items-center">
                <div className="text-3xl font-thin">
                    Blog
                </div>
                <input className="p-2 rounded-full" placeholder="search" />
            </div>
            <NavControls />
        </div>
    )
}