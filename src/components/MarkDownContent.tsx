import Markdown from "react-markdown";
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import { Flex, Text, UnorderedList, useColorMode } from "@chakra-ui/react";
import Link from "next/link";

export default function MarkDownContent (
    { children } : { children: string | null | undefined }
) 
{
    const { colorMode } = useColorMode()

    return <>
        <Flex p={4} flexDir={'column'}>
            <Markdown
                components={ChakraUIRenderer({
                    li: props=> {
                        const { children } = props
                        return <Text display={'list-item'}>{children}</Text>
                    },
                    ul: props => {
                        const { children } = props
                        return <UnorderedList my={2} mb={4} pl={2}>
                            {children}
                        </UnorderedList> 
                    },
                    a: props => {
                        const { children } = props
                        return  <Link href={props.href as string} style={{
                            textDecoration: 'underline'
                        }}>
                            {children}
                        </Link>
                    },
                    strong: props => {
                        const { children } = props
                        return <Text as="strong" bg={colorMode == "dark" ? 'green.500' : 'yellow.300'} 
                            p={'2px'} rounded={'sm'}
                        >{children}</Text>
                    }
                })}
                skipHtml
            >
                {children}
            </Markdown>
        </Flex>
    </>
}
