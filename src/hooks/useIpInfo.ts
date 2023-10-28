import Country from "@/types/Country";
import useFetch from "./useFetch"

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
    const { data } = useFetch<IpInfo>(`https://ipinfo.io/json?token=${process.env.NEXT_PUBLIC_IP_INFO_TOKEN}`)
    return data 
}

export default useIpInfo;
