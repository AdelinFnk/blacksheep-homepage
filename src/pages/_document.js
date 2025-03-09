import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ChakraProvider } from '@chakra-ui/react'
import { Theme } from "/src/lib/theme"

export default class Document extends NextDocument {
    render() {
        return (
            <Html lang="en"  >
                <Head />
                    <body>
                        <ChakraProvider value={Theme}>
                            <Main />
                        </ChakraProvider>
                        <NextScript />
                    </body>
            </Html>
        )
    }
}