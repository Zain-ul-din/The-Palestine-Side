import VideoGallery from "@/components/VideoGallery";
import { getVideosContent } from "@/lib/content";
import VideosContent from "@/types/VideosContent";

export default function Page ({ content } : { content: VideosContent }) 
{
    return <VideoGallery content={content}/>
}

import { GetStaticProps } from "next";

export function getStaticProps(context: GetStaticProps) {

    const content = getVideosContent()

    return {
        props: {
            content
        }
    }
}