import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"


const customConfig = defineConfig({
    globalCss: {
        "body": {
            bg: {
                light: "#bbf7d0",
                dark: "#1a032e",
            },
        },
    },

    theme: {
        textStyles: {
            "section-title":{
                textDecoration: "underline",
                fontSize: "20px",
                textUnderlineOffset: "6px",
                textDecorationColor: "#525252",
                textDecorationThickness: "4px",
                marginTop: "3",
                marginBottom: "4",
            }
        },
        link:{
            color: {
                light: "#1a032e",
                dark: "#bbf7d0",
                textUnderlineOffset: "3px",
            }
        },

        fonts: {
            heading: "'M PLUS Rounded 1c', sans-serif",
            body: "'M PLUS Rounded 1c', sans-serif",
        },
        colors: {
            grassTeal: "#88ccca",
        },

        config: {
            initialColorMode: "dark",
            useSystemColorMode: true,
        },

    },

})

export const Theme = createSystem(defaultConfig, customConfig)