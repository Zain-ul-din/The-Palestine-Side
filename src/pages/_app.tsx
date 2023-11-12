import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { CSSReset, ChakraProvider } from '@chakra-ui/react';
import theme from '@/styles/theme';
import MainLayout from '@/Layout/MainLayout';
import { motion } from 'framer-motion';

export default function App({ Component, pageProps }: AppProps) {
    
    return (
        <ChakraProvider theme={theme}>
            <MainLayout>
                {/* Prevent FOUC (Flash of Unstyled Content)  */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1, delay: 0.3 }}
                >
                    <Component {...pageProps} />
                </motion.div>
            </MainLayout>
            <CSSReset />
        </ChakraProvider>        
    ); 
}

