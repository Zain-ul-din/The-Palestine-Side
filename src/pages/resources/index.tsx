import Resources from "@/components/Resources";
import { getResourcesContent } from "@/lib/content";
import ResourceContent from "@/types/ResourcesContent";
import { GetStaticPropsContext } from "next";

export default function Page ({ content } : { content: ResourceContent }) 
{
    return <main>
        <Resources content={content}/>
    </main>
}

export function getStaticProps(context: GetStaticPropsContext) 
{
    const content = getResourcesContent()

    return {
        props: { content }
    }
}
