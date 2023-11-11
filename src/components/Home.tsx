import { Center, Heading, useColorMode } from "@chakra-ui/react";
import ContentLayout from "@/Layout/ContentLayout";

export default function Home () 
{
    const { colorMode } = useColorMode()
    
    return <ContentLayout gap={3} p={2}>
        <Center my={3} flexDir={'column'} gap={2}>
            <Heading textAlign={'center'} color={colorMode == "light" ? 'green.700' : 'green.300'} fontWeight={'extrabold'}>
                The Palestine Side
            </Heading>
            <Heading color={colorMode == "light" ? 'red.600' : 'red.300'} textAlign={'center'} fontSize={'xl'}>
                of Palestine-Israel Conflict
            </Heading>
        </Center>
    </ContentLayout>
}

