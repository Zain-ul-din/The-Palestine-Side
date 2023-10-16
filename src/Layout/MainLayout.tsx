import { Flex, FlexProps } from "@chakra-ui/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MainLayout (props: FlexProps) 
{
    return <>
        <Header />
            {props.children}
        <Footer />
    </>
}
