import useSWR, { useSWRConfig } from "swr";
import fetcher from "@/lib/fetcher";
import axios from "axios";
import { useEffect, useState } from "react";

export default function useCurrentUser() {
    const { data, error, isLoading } = useSWR("/api/user/current", fetcher);
    
    return {
        data,
        error,
        isLoading,
    }

    // const [data, setData] = useState<User>();
    // const [error, setError] = useState<Error | null>();
    // const [isLoading, setLoading] = useState(true);

    // useEffect(() => {

    //     const fetchData = async () => {
    //         try {
    //             setLoading(true);
    //             const response = await axios.get(`http://localhost:3000/api/user/current`);
    //             setData(response.data);
    //         } catch (error: any) {
    //             setError(error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchData();
    // }, []);

    // return { data, error, isLoading };
}