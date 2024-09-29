import useSWR, { useSWRConfig } from "swr";
import fetcher from "@/lib/fetcher";

export default function useCurrentUser() {
    const { data, error, isLoading } = useSWR<typeof useSWRConfig>("/api/user/current", fetcher);
    
    return {
        data,
        error,
        isLoading,
    }
}