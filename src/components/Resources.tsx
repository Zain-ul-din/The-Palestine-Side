import ContentLayout from "@/Layout/ContentLayout";
import useResolveSelfTargets from "@/hooks/useResolveSelfTargets";
import ResourceContent from "@/types/ResourcesContent";
import { Divider, Flex, Heading, Input, Text, useColorMode, useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

export default function Resources ({ content } : { content: ResourceContent }) 
{
    const [isSmallScreen] = useMediaQuery("(max-width: 500px)")
    const [input, setInput] = useState<string>("")
    const { colorMode } = useColorMode()
    useResolveSelfTargets();
    console.log("hello there");
    
    return <ContentLayout p={isSmallScreen ? 2 : 2}>
        <Flex width={'100%'} flexDir={'column'} gap={8}
            bg={colorMode == "light" ? 'gray.50' : 'whiteAlpha.50'} p={isSmallScreen ? 2 : 4}
            rounded={'md'} 
        >
            <Heading>Resources</Heading>
            <Input placeholder="Search" 
                onChange={(e)=> setInput(e.target.value)}
                value={input}
            />
            <Flex flexDir={'column'} gap={4}>
                {content.resources
                .filter(r => r.title.toLowerCase().includes(input.toLowerCase()) || r.source.toLowerCase().includes(input.toLowerCase()))
                .map((resource,idx)=> {
                    return <Flex flexDir={'column'} gap={1} key={idx}>
                        <Link href={resource.url} target="_blank">
                            <Text textDecoration={'underline'} cursor={'pointer'} overflow={'hidden'} textOverflow={'ellipsis'}>
                                {resource.title}
                            </Text>
                        </Link>
                        <Text fontWeight={'bold'} fontFamily={'monospace'} color={colorMode == "light" ? 'gray.700' : 'gray.400'} overflow={'hidden'} textOverflow={'ellipsis'}>
                            {resource.source.toUpperCase()}
                        </Text>
                        <Divider></Divider>
                    </Flex>
                })}
            </Flex>
        </Flex>
    </ContentLayout>
}