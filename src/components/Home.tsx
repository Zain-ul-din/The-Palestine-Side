import TableOfContent from "@/types/TableOfContent";
import { Center, Flex, Heading, useColorMode } from "@chakra-ui/react";
import IconLink from "./design/IconLink";
import { ROUTES } from "@/lib/constant";
import ContentLayout from "@/Layout/ContentLayout";

interface HomeProps {
    tableOfContent: TableOfContent
}

export default function Home ({ tableOfContent } : HomeProps) 
{
    const { colorMode } = useColorMode()
    
    return <ContentLayout gap={3}>
        <Center my={3} flexDir={'column'} gap={2}>
            <Heading textAlign={'center'} color={colorMode == "light" ? 'green.700' : 'green.300'} fontWeight={'extrabold'}>
                The Palestine Side
            </Heading>
            <Heading color={colorMode == "light" ? 'red.600' : 'red.300'} textAlign={'center'} fontSize={'xl'}>
                of Palestine-Israel Conflict
            </Heading>
        </Center>
        {/* table of content */}
        <Heading fontSize={'xl'}>
            Start from here
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

