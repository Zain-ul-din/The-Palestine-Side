import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/styles/theme';
import MainLayout from '@/Layout/MainLayout';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </ChakraProvider>        
    ); 
}

