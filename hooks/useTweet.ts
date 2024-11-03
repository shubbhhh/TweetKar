import fetcher from "@/lib/fetcher"
import useSWR from "swr"

export interface PostWithIsLiked extends Post {
    isLiked: boolean
}

export function useTweet(postId: string): { 
    data: PostWithIsLiked, 
    error: Error, 
    isLoading: boolean,
} {
    const { data, error, isLoading } = useSWR(`/api/tweet/${postId}`, fetcher);

    console.log(data)

    return {
        data,
        error,
        isLoading,
    }
}