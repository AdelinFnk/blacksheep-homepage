import { ChakraProvider } from "@chakra-ui/react"
import { Theme } from "/src/lib/theme"
import {ColorModeProvider} from "@/components/ui/color-mode";


export function Provider(props) {
    return (
        <ChakraProvider value={Theme}>
            <ColorModeProvider >
                {props.children}
            </ColorModeProvider>
        </ChakraProvider>
    )
}
