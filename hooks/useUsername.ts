import useSWR from "swr";
import fetcher from "@/lib/fetcher";

export function useUsername(username: string): { data: User, error: Error, isLoading: Boolean} {
    const { data, error, isLoading } = useSWR(`/api/username/${username}`, fetcher);

    return {
        data,
        error,
        isLoading
    }
}