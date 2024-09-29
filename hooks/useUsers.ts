import useSWR from "swr";
import fetcher from "@/lib/fetcher";

export function useUsers() {
    const { data, error, isLoading } = useSWR("/api/user/bulk", fetcher);

    return {
        data,
        error,
        isLoading
    }
}