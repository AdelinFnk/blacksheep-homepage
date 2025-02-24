import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"
import { defineTextStyles } from "@chakra-ui/react"


const textStyles = defineTextStyles({
    body: {
        value: {
            textDecoration: "underline",
            fontSize: "20px",
            textUnderlineOffset: "8px",
            textDecorationColor: "#525252",
            textDecorationThickness: "4px",
            marginTop: "3",
            marginBottom: "4",
        },
    },
})

const customConfig = defineConfig({
    theme: {
        textStyles,
        tokens: {

            link:{
                color: {
                    light: {value: '#1a032e'},
                    dark: {value: '#bbf7d0'},
                    textUnderlineOffset: "3px",
                }
            },

            fonts: {
                heading: {value: "'Roboto-Mono', sans-serif"},
                body: {value: "'Roboto-Mono', sans-serif"},
            },
            colors: {
                grassTeal: {value: '#bbf7d0'},
            },

            config: {
                initialColorMode: "dark",
                useSystemColorMode: true,
            },
        }

    },

    globalCss: {
        "body": {
        },
    },


})



export const Theme = createSystem(defaultConfig, customConfig)
