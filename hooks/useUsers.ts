import useSWR from "swr";
import fetcher from "@/lib/fetcher";

export function useUsers() {
    // not working::  TypeError: (0 , swr__WEBPACK_IMPORTED_MODULE_0__.default) is not a function
    const { data, error, isLoading } = useSWR("http://localhost:3000/api/user/bulk", fetcher);

    return {
        data,
        error,
        isLoading
    }
}