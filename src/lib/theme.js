import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"


const customConfig = defineConfig({
    globalCss: {
        body: {
            backgroundColor: {
                light: "gray.100",
                dark: "red",
            },
        },
    },
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

export const Theme = createSystem(defaultConfig, customConfig)
