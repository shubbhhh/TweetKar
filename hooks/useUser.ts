import axios from 'axios';
import { useEffect, useState } from 'react';

export function useUser(userId: string) {
    const [data, setData] = useState<User>();
    const [error, setError] = useState<Error | null>();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (!userId) return;

        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`api/user/${userId}`);
                console.log(response)
                setData(response.data);
            } catch (error: any) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        console.log(data, error)
    }, [userId]);

    return { data, error, isLoading };
}
