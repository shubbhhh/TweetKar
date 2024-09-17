"use client"

import { AvatarIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { useRouter } from "next/router";

export default function NavControls() {
    const isLoggedIn = false;
    // const router = useRouter();

    // const handleClick = () => {
    //     router.push('/signin')
    // }

    return (
        <div className="flex gap-2 items-center">
            {isLoggedIn? (
                <></>
            ) : (
                <div>
                    <Button 
                        className="rounded-3xl"
                        // onClick={handleClick}
                    >
                        signin
                    </Button>
                </div>
            )}
            <AvatarIcon height={40} width={40} />
        </div>
    )
}