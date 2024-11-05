"use client"

import Avatar from "./Avatar";
import { Button } from "./ui/button";
import AutogrowTextarea from "./AutoGrowTextarea";
import { Image } from "lucide-react";
import { useState } from "react";
import useCurrentUser from "@/hooks/useCurrentUser";
import axios from "axios";


export default function InputTextArea() {
    const { data: user } = useCurrentUser();
    const [content, setContent] = useState("");

    const postTweet = async (content: string, authorId: string) => {
        await axios.post("/api/tweet/post",
            {
                content: content,
                authorId: authorId
            }
        );

        setContent("");
    }

    return (
        <div className="w-full p-2">
            <div className="w-full p-2 flex items-start gap-2">
                <Avatar username="testuser" name="test" showOnlyAvatar />
                <AutogrowTextarea
                    className="w-full p-2 outline-none resize-none focus:outline-none"
                    placeholder="What's happning?!"
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <div className="flex items-center w-full justify-between border-t p-2 px-4">
                <div className="flex items-center gap-2">
                    <Image className="text-sky-600" size={20} />
                </div>
                <Button 
                    className="rounded-full bg-sky-500 hover:bg-sky-400"
                    onClick={() => postTweet(content, user.id)}
                >
                    Post
                </Button>
            </div>
        </div>
    )
}