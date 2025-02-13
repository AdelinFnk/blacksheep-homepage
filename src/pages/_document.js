import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ChakraProvider } from '@chakra-ui/react'
import { system } from "/src/lib/theme"

export default class Document extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <Head />
                    <body>
                        <ChakraProvider value={system}>
                            <Main />
                        </ChakraProvider>
                        <NextScript />
                    </body>
            </Html>
        )
    }
}