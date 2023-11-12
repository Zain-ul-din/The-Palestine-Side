import { Button, Flex, Icon, Menu, MenuButton, MenuItem, MenuList, useMediaQuery } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { BiHome, BiSolidVideos, BiNews } from "react-icons/bi";
import IconLink from "./design/IconLink";
import Image from "next/image";
import ThemeToggler from "./design/ThemeToggler";
import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/BS";
import { ROUTES } from "@/lib/constant";

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

    const [isSmScreen] = useMediaQuery("(max-width: 600px)") 
    const [isBaseScreen] = useMediaQuery("(max-width: 360px)")
    
    return <Flex width={'100%'} 
        borderBottom={'1px solid'}
        mb={2} py={3} px={4} borderColor={'gray.700'}
    >
        <Flex width={'100%'} maxW={'1400px'} m={'0 auto'}
            justifyContent={isSmScreen ? 'center' : 'initial'}
            flexDir={isSmScreen ? 'column': 'initial'}
            gap={4}
            alignItems={'center'}
        >
            <Logo />

            <Flex gap={isBaseScreen ? 2 : 5} ml={isSmScreen ? 'initial':'auto'}  alignItems={'center'} justifyContent={'center'}
                flexWrap={isBaseScreen ? 'wrap' : 'initial'}
            >
                {headerLinks.map((l,i)=> {
                    return <IconLink key={i} icon={l.icon} 
                        url={l.link} highlighted={(router.route == l.link)}
                        flexProps={{
                            fontSize: isSmScreen ? 'sm' : 'inherit'
                        }}
                    >
                        {l.heading}
                    </IconLink>
                })}

                <ThemeToggler size={'sm'}/>
                
                <AdditionalNavLinks /> 
            </Flex>
        </Flex>
    </Flex>
}

const Logo = ()=> {
    return <Link href={'/'}>
        <Flex alignItems={'center'} gap={1} fontWeight={'bold'} justifySelf={'flex-start'}>
            <Image 
                src={'/images/palestine_flag_logo.png'}
                width={30}
                height={30}
                quality={100}
                alt="palestine_flag_logo"
                />
            The Palestinian Side
        </Flex>
    </Link> 
}

const AdditionalNavLinks = ()=> (
    <>
    <Menu>
        <MenuButton as={Button} size={'sm'}>
            <BsThreeDotsVertical />
        </MenuButton>
        <MenuList>
            <Link href={ROUTES.Martyrs}>
                <MenuItem>Martyrs</MenuItem>
            </Link>
        </MenuList>
    </Menu>
    </>
)