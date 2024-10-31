import fetcher from "@/lib/fetcher"
import useSWR from "swr"


export function useTweet(postId: string): { 
    data: Post, 
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