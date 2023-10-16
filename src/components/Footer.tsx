import { Flex, Text } from "@chakra-ui/react";
import IconText from "./design/IconText";
import { AiOutlineTeam, AiOutlineShareAlt } from "react-icons/ai";
import IconLink from "./design/IconLink";

export default function Footer () 
{
    return <Flex borderTop={'1px solid'} mt={'auto'}>
        <Flex width={'100%'} 
            p={2} maxW={'1400px'} m={'0 auto'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={10}
        >
            {/* TODO: add contribution link */}
            <IconLink url="/" icon={<AiOutlineTeam />}>
                Contribute
            </IconLink>

            <IconText icon={<AiOutlineShareAlt/>} onClick={()=> {
                navigator.share({
                    /** TODO: add share meta */
                    title: 'The Palestine Side'
                })
            }}>
                Share
            </IconText>
            
        </Flex>
    </Flex>
}

