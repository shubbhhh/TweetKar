import { Bookmark, Heart, MessageCircle, SquareArrowOutUpRight } from "lucide-react";
import Avatar from "../Avatar";
import { useRouter } from "next/navigation";
import AutogrowTextarea from "../AutoGrowTextarea";
import { Button } from "../ui/button";
import TweetActionButtons from "../TweetActionButtons";
import AddCommentBox from "../AddCommentBox";


export default function TweetCard({ post }: { post: Post}) {
    const router = useRouter();

    console.log(post)

    return (
        <div 
            className="p-4 border-y"
            onClick={() => {router.push(`/tweet/${post.id}`)}}
        >
            <Avatar username={post.author.username} name={post.author.name} />
            
            {/* Content */}
            <div className="p-4">
                <div>
                    {post.content}
                </div>
            </div>

            {/* Action button */}
            <TweetActionButtons post={post} /> 

            {/* Add comment */}
            <AddCommentBox post={post} />
        </div>
    )
}