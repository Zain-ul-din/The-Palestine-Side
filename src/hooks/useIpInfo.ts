import Country from "@/types/Country";
import { useEffect, useState } from "react";
import HttpClient from "@/lib/http_client";
import { LOCAL_STORAGE_KEYS } from "@/lib/constant";

export interface IpInfo 
{
    ip: string;
    city: string;
    region: string;
    country: Country;
    loc: string;
    org: string;
    postal: string;
    timezone: string;
    readme: string;
} 

const useIpInfo = ()=> {
    const [data, setData] = useState<IpInfo>()

    useEffect(()=> {
        try {
            setData(JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEYS.IP_INFO) as any))
            if(data?.country == undefined)
                throw Error("invalid info")
        } catch(err) {
            const url = `https://ipinfo.io/json?token=${process.env.NEXT_PUBLIC_IP_INFO_TOKEN}`
            new HttpClient(url, (res) => {
                const { data } = res;
                setData(data);
                window.localStorage.setItem(LOCAL_STORAGE_KEYS.IP_INFO, JSON.stringify(data as object))
            }).get();
        }
    }, [])
    
    return data 
}

export default useIpInfo;
