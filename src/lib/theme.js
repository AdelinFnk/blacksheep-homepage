import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"


const customConfig = defineConfig({
    theme: {
        textStyles: {
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
        },
        semanticTokens: {
            colors: {
                bg: {
                    DEFAULT: {
                        value: { _light: "#bbf7d0", _dark: "#9b1c1c" }, // Custom dark background
                    },
                },
            },
        },
        tokens: {
            fonts: {
                heading: {value: "'Roboto-Mono', sans-serif"},
                body: {value: "'Roboto-Mono', sans-serif"},
            },
            colors:{
                grassTeal: {value: '#bbf7d0'},
            },
        },

    },
})

export const theme = createSystem(defaultConfig, customConfig)
