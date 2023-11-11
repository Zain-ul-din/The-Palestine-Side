import Markdown from "react-markdown";
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import { Flex, Heading, List, ListItem, OrderedList, Text, UnorderedList, useColorMode } from "@chakra-ui/react";
import Link from "next/link";

export default function MarkDownContent (
    { children } : { children: string | null | undefined }
) 
{
    const { colorMode } = useColorMode()

    return <>
        <Flex p={4} flexDir={'column'} 
            bg={colorMode == "light" ? 'gray.50' : 'whiteAlpha.50'} 
            rounded={'md'}
        >
            <Markdown
                components={ChakraUIRenderer({
                    li: props=> {
                        const { children } = props
                        return <ListItem lineHeight={'1.6rem'}>{children}</ListItem>
                    },
                    ul: props => {
                        const { children } = props
                        return <UnorderedList my={2} mb={4} pl={1}>
                            {children}
                        </UnorderedList> 
                    },
                    ol: props => {
                        const { children } = props
                        return <OrderedList my={2} mb={4}>{children}</OrderedList>
                    },
                    a: props => {
                        const { children } = props
                        return  <Link href={props.href as string} style={{
                            textDecoration: 'underline'
                        }} target="_blank">
                            {children}
                        </Link>
                    },
                    strong: props => {
                        const { children } = props
                        return <Text as="strong" bg={colorMode == "dark" ? 'yellow.200' : 'yellow.300'} 
                            color={colorMode == "dark" ? 'black' : 'initial'}
                            px={'2px'} rounded={'sm'} 
                        >{children}</Text>
                    },
                    h3: props => {
                        const { children } = props
                        return <Heading as={'h3'} fontSize={'xl'} my={3}>
                            {children}
                        </Heading>
                    },
                    h2: props => {
                        const { children } = props
                        return <Heading fontSize={'3xl'} my={3}>
                            {children}
                        </Heading>
                    }
                })}
                skipHtml
            >
                {children}
            </Markdown>
        </Flex>
    </>
}
