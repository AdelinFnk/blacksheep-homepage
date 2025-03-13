import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "/src/lib/theme"
import {ColorModeProvider} from "./color-mode";


export function Provider(props) {
    return (
        <ChakraProvider value={theme}>
            <ColorModeProvider>
                {props.children}
            </ColorModeProvider>
        </ChakraProvider>
    )
}
