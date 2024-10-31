import { useCallback, useRef, useState } from "react";
import AutogrowTextarea from "./AutoGrowTextarea";
import Avatar from "./Avatar";
import { Button } from "./ui/button";
import axios from "axios";

export default function AddCommentBox({ post }: { post: Post }) {
    const [comment, setComment] = useState("");
    const commentBox = useRef<HTMLTextAreaElement | null>(null)
    
    const handlePost = useCallback(async () => {
        // console.log("Post:", post)
        console.log("PostId:", post.id, "comment:", comment)
        const res = await axios.post("/api/comment/post", {
            postId: post.id,
            comment: comment
        });
        
        // commentBox.current?.value = ""
    }, [])

    return (
        <div className="flex items-center gap-2 w-full pt-4">
            <Avatar username={post.author.username} name={post.author.name} showOnlyAvatar />
            <AutogrowTextarea 
                // ref = {commentBox}
                className="w-full outline-none items-center resize-none" 
                placeholder="Add comment..."
                onChange={(e) => setComment(e.target.value)} 
            />
            <Button 
                className="rounded-full bg-sky-500 hover:bg-sky-400"
                onClick={handlePost}
            >
                Post
            </Button>
        </div>
    )
}