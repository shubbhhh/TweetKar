"use client"
import CommentCard from "@/components/CommentCard";
import Header from "@/components/Header";
import TweetCard from "@/components/tweets/TweetCard";
import { useTweet } from "@/hooks/useTweet";
import { Loader2 } from "lucide-react";


export default function TweetPage({ params }: { params: { postId: string }}) {
    const { postId } = params;
    console.log("Id: ", postId)
    const { data, isLoading } = useTweet(postId);
    console.log("Post: ", data)

    if (isLoading || !data) {
        return (
            <Loader2 />
        )
    }

    return (
        <div>
            <Header label="Post" showBackArrow />
            <TweetCard post={data} />
            <div>
                {data.comments.map((comment, index) => <CommentCard key={index} comment={comment}/>)}
            </div>
        </div>
    )
}