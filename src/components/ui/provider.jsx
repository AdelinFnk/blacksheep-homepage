import { ChakraProvider } from "@chakra-ui/react"
import { Theme } from "/src/lib/theme"
import {ColorModeProvider} from "./color-mode";


export function Provider(props) {
    return (
        <ChakraProvider value={Theme}  >
            <ColorModeProvider >
                {props.children}
            </ColorModeProvider>
        </ChakraProvider>
    )
}
