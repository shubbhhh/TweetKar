import { Bookmark, Heart, MessageCircle, SquareArrowOutUpRight } from "lucide-react";
import Avatar from "./Avatar";


export default function CommentCard({ comment }: { comment: TweetComment }) {

    return (
    <div className="mx-2">
        <div className="w-full p-2 flex items-center border-b">
            <Avatar username={comment.user.username} name={comment.user.name} showOnlyAvatar />
            <div className="p-2">
                <div className="flex items-center gap-2">
                    <p className="text-[16px]">
                        {comment.user.name}
                    </p>
                    <button className="text-[12px] text-neutral-500 hover:underline">
                        @{comment.user.username}
                    </button>
                </div>
                <p>
                    {comment.message}
                </p>
            </div>
        </div>

        {/* Action button */}
        <div className="flex justify-between px-4 border-y py-4">
            {/* <div className="flex items-center gap-2">
                <MessageCircle strokeWidth={2} size={20} className="hover:text-sky-500" />
                <p className="font-light text-sm">
                    {comment.children.length}
                </p>
            </div> */}
            <div className="flex items-center gap-2">
                <Heart strokeWidth={2} size={20} className="hover:text-red-500" />
                <p className="font-light text-sm">
                    {comment.Likes.length}
                </p>
            </div>
            <div className="flex gap-2">
                <div className="flex items-center gap-2">
                    <SquareArrowOutUpRight strokeWidth={2} size={20} className="hover:text-sky-500" />
                    <p className="font-light text-sm">
                        
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Bookmark strokeWidth={2} size={20} className="hover:fill-black"/>
                    <p className="font-light text-sm">
                        {/* {post.bookmarks.length} */}
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}