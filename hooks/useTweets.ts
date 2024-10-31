import fetcher from "@/lib/fetcher"
import useSWR, { KeyedMutator } from "swr"


export function useTweets(): { 
    data: Post[], 
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