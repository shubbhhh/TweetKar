import fetcher from '@/lib/fetcher';
import axios from 'axios';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

interface UseUserProp {
    username: string
}

export function useUser(userId: string): {
    data: User, 
    error: Error, 
    isLoading: Boolean
} {
    const { data, error, isLoading, mutate } = useSWR(`/api/user/${userId}`, fetcher)

    return { data, error, isLoading };
}
