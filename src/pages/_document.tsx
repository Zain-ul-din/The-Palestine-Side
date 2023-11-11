import { config as themeConfig } from '@/styles/theme';
import { ColorModeScript } from '@chakra-ui/react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body>
                <ColorModeScript initialColorMode={themeConfig.initialColorMode}/>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
