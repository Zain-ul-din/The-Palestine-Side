import ContentLayout from "@/Layout/ContentLayout";
import AwesomePalestine from "@/components/AwesomePalestine";
import Head from "@/components/Head";
import MarkDownContent from "@/components/MarkDownContent";
import { EXTERNAL_API_LINKS } from "@/lib/constant";
import { GetStaticPropsContext } from "next";

export default function Page ({ content } : { content: string}) {
    return <>
        <Head 
            title="Awesome Palestine"
            description="A curated list of Palestine and Palestinian-Israeli conflict resources."
            socialCardLink="https://github.com/Zain-ul-din/Zain-ul-din/assets/78583049/c7b2f1c8-2ece-4474-9c67-d4b5a3cd8930"
        />
        <main>
            <ContentLayout p={2}>
                <AwesomePalestine />
                <MarkDownContent
                    markDownConfig={{
                        linkRedirect: '_self',
                        useHashRouting: true
                    }}
                >
                    {content}
                </MarkDownContent>
            </ContentLayout>
        </main>
    </>
}


export async function getStaticProps(context: GetStaticPropsContext)
{
    const content = await (await 
        fetch(EXTERNAL_API_LINKS.AWESOME_PALESTINE_README)
    ).text()
    
    return {
        props: {
            content,
            revalidate: 10 
        }
    }
}
