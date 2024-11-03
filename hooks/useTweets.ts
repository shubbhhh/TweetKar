import fetcher from "@/lib/fetcher"
import useSWR, { KeyedMutator } from "swr"

interface PostWithLikedState extends Post {
    isLiked: boolean
}

export function useTweets(): { 
    data: PostWithLikedState[], 
    error: Error, 
    isLoading: boolean, 
    mutate: KeyedMutator<any> 
} {
    const { data, error, isLoading, mutate } = useSWR("/api/tweet/bulk", fetcher);

    return {
        data,
        error,
        isLoading,
        mutate
    }
}