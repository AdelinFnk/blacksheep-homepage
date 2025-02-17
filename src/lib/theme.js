import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"


const customConfig = defineConfig({
    theme: {
        tokens: {
            textStyles: {
                "section-title":{
                    textDecoration: "underline",
                    fontSize: "20px",
                    textUnderlineOffset: "6px",
                    textDecorationColor: {value: '#525252'},
                    textDecorationThickness: "4px",
                    marginTop: "3",
                    marginBottom: "4",
                }
            },
            link:{
                color: {
                    light: {value: '#1a032e'},
                    dark: {value: '#bbf7d0'},
                    textUnderlineOffset: "3px",
                }
            },

            fonts: {
                heading: {value: "'M PLUS Rounded 1c', sans-serif"},
                body: {value: "'M PLUS Rounded 1c', sans-serif"},
            },
            colors: {
                grassTeal: {value: '#88ccca'},
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