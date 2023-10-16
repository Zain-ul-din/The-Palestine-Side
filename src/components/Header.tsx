import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { BiHome, BiSolidVideos, BiNews } from "react-icons/bi";

interface HeaderLink 
{
    heading: string;
    icon: ReactNode;
    link: string;
}

const headerLinks: HeaderLink[] = [
    {
        heading: 'Home',
        icon: <BiHome />,
        link: '/'
    },
    {
        heading: 'Resources',
        icon: <BiNews />,
        link: '/resources'
    },
    {
        heading: 'videos',
        icon: <BiSolidVideos />,
        link: '/videos'
    },
]

export default function Header () 
{
    const router = useRouter()

    return <Flex width={'100%'}
        borderBottom={'1px solid'}
        mb={2}
    >
        <Flex 
            maxW={'1200px'} m={'0 auto'} 
            py={4} px={2}
            width={'100%'}
            justifyContent={'center'}   gap={10} 
        >
            {headerLinks.map((l,i)=> {
                return <Link key={i} href={l.link}>
                    <Flex fontSize={'lg'} alignItems={'center'} 
                        gap={1}
                        cursor={'pointer'} _hover={{
                            textDecoration: 'underline'
                        }}
                        textDecoration={router.route == l.link ? 'underline' : 'none'}
                    >
                        {l.icon}  {l.heading}
                    </Flex>
                </Link>
            })}
        </Flex>
    </Flex>
}
