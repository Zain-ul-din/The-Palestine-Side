import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, useColorMode, ButtonProps } from "@chakra-ui/react";


export default function ThemeToggler (props: ButtonProps) 
{
    const { colorMode, toggleColorMode } = useColorMode()
    
    return <Button onClick={toggleColorMode} {...props}>
        {colorMode == "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
}
