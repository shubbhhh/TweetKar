import { Bookmark, Heart, MessageCircle, SquareArrowOutUpRight } from "lucide-react";
import Avatar from "../Avatar";
import { useRouter } from "next/navigation";
import TweetActionButtons from "../TweetActionButtons";
import AddCommentBox from "../AddCommentBox";
import { PostWithIsLiked } from "@/hooks/useTweet";


export default function TweetCard({ post }: { post: PostWithIsLiked }) {
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