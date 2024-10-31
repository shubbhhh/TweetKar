import useSWR from "swr";
import fetcher from "@/lib/fetcher";

export function useUsers(): { data: User[], error: Error, isLoading: Boolean} {
    const { data, error, isLoading } = useSWR("/api/user/bulk", fetcher);

    return {
        data,
        error,
        isLoading
    }
}