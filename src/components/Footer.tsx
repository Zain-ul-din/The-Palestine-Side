import { Flex, Text } from "@chakra-ui/react";
import IconText from "./design/IconText";
import { AiOutlineTeam, AiOutlineShareAlt } from "react-icons/ai";
import IconLink from "./design/IconLink";
import { LINKS, ROUTES } from "@/lib/constant";
import Link from "next/link";

export default function Footer () 
{
    return <Flex borderTop={'1px solid'} mt={'auto'} borderColor={'gray.700'} 
        flexDir={'column'} justifyContent={'center'} alignItems={'center'}
    >
        <Flex width={'100%'} 
            p={2} maxW={'1400px'} m={'0 auto'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={10}
        >
            <IconLink url={LINKS.Contribute_Github} icon={<AiOutlineTeam />}>
                Contribute
            </IconLink>

            <IconText icon={<AiOutlineShareAlt/>} onClick={()=> {
                navigator.share({
                    /** TODO: add share meta */
                    title: 'The Palestine Side',
                    url: window.location.href
                })
            }}>
                Share
            </IconText>
            
        </Flex>
        <Flex justifyContent={'space-evenly'} flexWrap={'wrap'} my={3} gap={5}>
            {Object.entries(ROUTES).map(([k,v], i)=>{
                if([ROUTES.Content].includes(v)) return;
                return <Link href={v} key={i}>
                    <Text textDecoration={'underline'} fontFamily={'serif'}>{k}</Text>
                </Link>
            })}
        </Flex>
        <AlertMessage />
    </Flex>
}


const AlertMessage = ()=> (
    <Text py={4} fontSize={'xs'} fontFamily={'monospace'} textAlign={'center'} px={4} maxW={'40rem'}>
        {`Note: This is not the official website of Palestine. Nonetheless, this site strongly supports the Palestinian cause. Our mission is to accurately portray the realities of Palestine and express our solidarity with the Palestinian people.`}
        <br/>
        #Free Palestine
    </Text>
)