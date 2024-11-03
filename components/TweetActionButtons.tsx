import { PostWithIsLiked } from "@/hooks/useTweet";
import axios from "axios";
import { Bookmark, Heart, MessageCircle, SquareArrowOutUpRight } from "lucide-react";
import { useCallback } from "react";


export default function TweetActionButtons({ post }: { post: PostWithIsLiked }) {
    const handleLike = useCallback(async (event: any) => {
        // if (!post.isLiked) {
        //     const request = async () => {
        //         await axios.post("/api/like", {
        //         postId: post.id
        //         });
        //     }
        // } else {
        //     // To do
        //     // const request = async () => {
        //     //     await axios.delete("/api/like");
        //     // }
        // }
        event.stopPropagation();
        await axios.post("/api/like", {
            postId: post.id
        })
    }, []);

    // To do:
    const handleBookMark = useCallback(async (event: any) => {
        event.stopPropagation();
        // if ()
        await axios.post("/api/bookmark", {
            postId: post.id
        });
    }, []);
    
    return (
        <div className="flex justify-between border-y">
            <div className="flex items-center gap-2 hover:bg-sky-500/5 hover:rounded-full m-2 p-2">
                <MessageCircle 
                    strokeWidth={2} 
                    size={20}
                    className="hover:text-sky-500 hover:cursor-pointer" 
                    onClick={() => {}}
                />
                <p className="font-light text-sm">
                    {post.comments.length}
                </p>
            </div>
            <div className="flex items-center gap-2 hover:bg-red-500/5 hover:rounded-full m-2 p-2">
                <Heart
                    strokeWidth={2} 
                    size={20} 
                    className={`hover:text-red-500 hover:cursor-pointer ${post.isLiked? "fill-red-500 text-red-500": ""}`}
                    onClick={(event) => handleLike(event)}
                />
                <p className="font-light text-sm">
                    {post.Likes.length}
                </p>
            </div>
            <div className="flex items-center gap-2 hover:bg-sky-500/5 hover:rounded-full m-2 p-2">
                <Bookmark
                    strokeWidth={2} 
                    size={20} 
                    className="hover:text-sky-500 hover:cursor-pointer"
                    onClick={() => {}}
                />
                <p className="font-light text-sm">
                    {post.bookmarks.length}
                </p>
            </div>
            <div className="flex items-center gap-2 hover:bg-sky-500/5 hover:rounded-full m-2 p-2">
                <SquareArrowOutUpRight
                    strokeWidth={2} 
                    size={20} 
                    className="hover:text-sky-500 hover:cursor-pointer" 
                    onClick={() => {}}
                />
            </div>
        </div>
    )
}