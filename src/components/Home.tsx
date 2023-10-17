import TableOfContent from "@/types/TableOfContent";
import { Flex, Heading } from "@chakra-ui/react";
import IconLink from "./design/IconLink";
import { ROUTES } from "@/lib/constant";
import ContentLayout from "@/Layout/ContentLayout";

interface HomeProps {
    tableOfContent: TableOfContent
}

export default function Home ({ tableOfContent } : HomeProps) 
{
    return <ContentLayout gap={3}>
        {/* table of content */}
        <Heading>
            Table of Content
        </Heading>
        <Flex ml={7} flexDir={'column'} gap={2}>
            {tableOfContent && tableOfContent.map((t,i)=>{
                return <IconLink
                    key={i}
                    url={`${ROUTES.Content}/${t}`}
                    flexProps={{
                        display: 'list-item',
                        color: 'blue.400'
                    }}
                >
                    {t}
                </IconLink>
            })}
        </Flex>
    </ContentLayout>
}

