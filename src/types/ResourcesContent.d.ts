import Country from "./Country";

export default interface ResourceContent 
{
    resources: Array<{ title: string; url: string; source: string, country?: Country}>
}
