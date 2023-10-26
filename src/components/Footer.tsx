import { Flex } from "@chakra-ui/react";
import IconText from "./design/IconText";
import { AiOutlineTeam, AiOutlineShareAlt } from "react-icons/ai";
import IconLink from "./design/IconLink";
import { LINKS } from "@/lib/constant";

export default function Footer () 
{
    return <Flex borderTop={'1px solid'} mt={'auto'} borderColor={'gray.700'}>
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
    </Flex>
}

