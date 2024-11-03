"use client"
import { useTweets } from "@/hooks/useTweets"
import { Loader2Icon } from "lucide-react";
import TweetCard from "./TweetCard";
import { PostWithIsLiked } from "@/hooks/useTweet";


export default function TweetFeed() {
    const { data: tweets, isLoading } = useTweets();

    if (isLoading) {
        return (    
            <Loader2Icon className="items-center" />
        )
    }

    if (!tweets && !isLoading) {
        return (
            <div className="flex items-center justify-center">
                Nothing to view.
                Follow Someone new!!
            </div>
        )
    }
    
    return (
        <div className="">
            {tweets.map((post: PostWithIsLiked, index: number) => (
                <TweetCard key={index} post={post} />
            ))}
        </div>
    )
}