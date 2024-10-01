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
                const response = await axios.get(`http://localhost:3000/api/user/${userId}`);
                setData(response.data);
            } catch (error: any) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [userId]);

    return { data, error, isLoading };
}
