import { Flex, FlexProps } from "@chakra-ui/react"

export default function ContentLayout (props: FlexProps) 
{
    return <Flex width={'100%'}>
        <Flex width={'100%'} maxW={'1420px'} 
            m={'0 auto'} p={4} flexDir={'column'} 
            {...props}
        >
            {props.children}
        </Flex>
    </Flex>
}
