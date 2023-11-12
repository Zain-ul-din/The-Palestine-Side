import { GetStaticPropsContext } from "next";
import Martyr from "@/types/Martyr";
import Head from "@/components/Head";

export default function Page ({ martyrs }: { martyrs: Array<Martyr> }) {
    useFirebaseAnalyticsReport(FIREBASE_ANALYTICS_EVENTS.martyrs)
    
    return <>
        <Head 
            title="Martyrs"
            description="Know their Name.The list of people killed in Gaza during one month. Palestinian Martyrs."
        />
        <main>
            <Martyrs 
                martyrs={martyrs}
            />        
        </main>
    </>
}

import { readFileSync } from "fs"
import { DATA_SOURCE } from "@/lib/constant";
import Martyrs from "@/components/Martyrs";
import { FIREBASE_ANALYTICS_EVENTS, useFirebaseAnalyticsReport } from "@/lib/firebase_analytics";

export function getStaticProps(context: GetStaticPropsContext) {

    const martyrs = JSON.parse(readFileSync(process.cwd() + DATA_SOURCE.Martyrs, "utf-8"))
    
    return {
        props: {
            martyrs
        }
    }
}