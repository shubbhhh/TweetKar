import { Bookmark, Heart, MessageCircle, SquareArrowOutUpRight } from "lucide-react";


export default function TweetActionButtons({ post }: { post: Post }) {
    const handleLike = () => {}

    const handleBookMark = () => {}
    

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
                    className="hover:text-red-500 hover:cursor-pointer" 
                    onClick={() => {}}
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