import VideoGallery from "@/components/VideoGallery";
import { getVideosContent } from "@/lib/content";
import { FIREBASE_ANALYTICS_EVENTS, useFirebaseAnalyticsReport } from "@/lib/firebase_analytics";
import VideosContent from "@/types/VideosContent";
import Head from "@/components/Head"

export default function Page ({ content } : { content: VideosContent }) 
{
    useFirebaseAnalyticsReport(FIREBASE_ANALYTICS_EVENTS.videos)
    
    return <>
        <Head />
        <main>
            <VideoGallery content={content}/>
        </main>
    </> 
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