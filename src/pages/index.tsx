import Home from '@/components/Home';

export default function Page({ content }:{ content: string }) 
{
    useFirebaseAnalyticsReport(FIREBASE_ANALYTICS_EVENTS.home_page)
    
    return (
        <>
            <Head />
            <main>
                <ContentLayout p={2}>
                    <Home />
                    <MarkDownContent>
                        {content}
                    </MarkDownContent>
                </ContentLayout>
            </main>
        </>
    );
}

import { GetStaticPropsContext } from 'next';
import { getContentOfFile } from '@/lib/content';
import ContentLayout from '@/Layout/ContentLayout';
import MarkDownContent from '@/components/MarkDownContent';
import { FIREBASE_ANALYTICS_EVENTS, useFirebaseAnalyticsReport } from '@/lib/firebase_analytics';
import Head from '@/components/Head';

export async function getStaticProps(context: GetStaticPropsContext) 
{
    const content = getContentOfFile("index")

    return {
        props: { content }, revalidate: 2
    };
}
