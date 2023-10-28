import Country from "./Country";

export default interface VideosContent 
{
    videos: Array<{ title: string, url: string, country?: Country }>
}
