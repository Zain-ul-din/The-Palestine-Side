import { Flex, FlexProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IconText extends FlexProps 
{
    highlighted?: boolean
    icon?: ReactNode
}

export default function IconText (props: IconText) 
{
    const { highlighted, icon, ...flexProps } = props

    return <Flex 
        fontSize={'lg'} 
        alignItems={'center'} 
        gap={1}
        cursor={'pointer'} 
        _hover={{ textDecoration: 'underline' }}
        textDecoration={highlighted ? 'underline' : 'none'}
        {...flexProps}
    >
        {icon}  {props.children}
    </Flex>
}
