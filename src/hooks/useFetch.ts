import { useState, useEffect } from 'react';
import HttpClient from '@/lib/http_client';

const useFetch = <T=any>(url: string): { data: T | null } => {
    const [data, setData] = useState<T | null>(null);

    useEffect(() => {
        new HttpClient(url, (res) => {
            const { data } = res;
            setData(data);
        }).get();
    }, [url]); 
    
    return {
        data
    };
};

export default useFetch;
