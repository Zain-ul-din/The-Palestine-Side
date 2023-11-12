import Head from "@/components/Head";
import Resources from "@/components/Resources";
import { getResourcesContent } from "@/lib/content";
import { FIREBASE_ANALYTICS_EVENTS, useFirebaseAnalyticsReport } from "@/lib/firebase_analytics";
import ResourceContent from "@/types/ResourcesContent";
import { GetStaticPropsContext } from "next";

export default function Page ({ content } : { content: ResourceContent }) 
{
    useFirebaseAnalyticsReport(FIREBASE_ANALYTICS_EVENTS.resources)
    
    return <>
        <Head />
        <main>
            <Resources content={content}/>
        </main>
    </> 
}

export function getStaticProps(context: GetStaticPropsContext) 
{
    const content = getResourcesContent()

    return {
        props: { content }
    }
}
