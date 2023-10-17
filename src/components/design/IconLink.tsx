import { FlexProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import Link from "next/link";
import IconText from "./IconText";

export interface IconLinkProps  
{
    url: string
    icon?: ReactNode
    highlighted?: boolean
    flexProps?: FlexProps
    children: ReactNode
}

export default function IconLink (props: IconLinkProps) 
{
    return <Link href={props.url}>
        <IconText icon={props.icon} highlighted={props.highlighted} {...props.flexProps}>
            {props.children}
        </IconText>
    </Link>
}
