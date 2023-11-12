import { Center, Heading, useColorMode } from "@chakra-ui/react";
import ContentLayout from "@/Layout/ContentLayout";

export default function Home () 
{
    const { colorMode } = useColorMode()
    
    return <ContentLayout gap={3} p={2}>
        <Center my={4} flexDir={'column'} gap={2}>
            <Heading textAlign={'center'} color={colorMode == "light" ? 'green.600' : 'green.300'} fontWeight={'extrabold'}>
                {`"The Palestine Side"`}
            </Heading>
            <Heading color={colorMode == "light" ? 'gray.800' : 'gray.50'} textAlign={'center'} fontSize={'xl'}>
                of Palestine-Israel Conflict
            </Heading>
        </Center>
    </ContentLayout>
}

