import { useColorMode } from '@chakra-ui/react';
import NextNProgress from 'nextjs-progressbar';

export default function ProgressBar () 
{
    const { colorMode } = useColorMode()
    return <NextNProgress 
        color={colorMode == "dark" ? "rgba(255,255,255,0.2)" : "#2F855A" } startPosition={0.3} stopDelayMs={200} 
        height={3} showOnShallow={true}
    />
}
