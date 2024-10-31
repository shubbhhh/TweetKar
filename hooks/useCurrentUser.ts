import useSWR, { useSWRConfig } from "swr";
import fetcher from "@/lib/fetcher";

export default function useCurrentUser(): {
    data: User,
    error: Error,
    isLoading: boolean
} {
    const { data, error, isLoading } = useSWR("/api/user/current", fetcher);
    
    return {
        data,
        error,
        isLoading,
    }
}