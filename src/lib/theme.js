import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"


const customConfig = defineConfig({
    theme: {
        textStyles: {
            body: {
                value: {
                    textDecoration: "underline",
                    fontSize: "20px",
                    textUnderlineOffset: "8px",
                    textDecorationColor: {_light: "#1a032e", _dark: "#baf5ce"},
                    textDecorationThickness: "4px",
                    marginTop: "3",
                    marginBottom: "4",
                },
            },
        },
        semanticTokens: {
            colors: {
                brand: {
                    subtle: {
                        value: {_light: "#bbf7d0", _dark: "#1a032e"}
                    },
                    linkColor: {value: '#bbf7d0'}
                },
                bg: {
                    DEFAULT: {
                        value: {_light: "#fce5d8", _dark: "#564260"}, // Custom dark background
                    },
                    element: {
                        value: {_light: "#bbf7d0", _dark: "#1a032e"},
                    },
                    link: {
                        value: {_light: "#1a032e", _dark: "#bbf7d0"},
                    },
                },
                fg: {
                    element: {
                        value: {_light: "{colors.black}", _dark: "{colors.whiteAlpha.900}"}, // Custom dark text color
                    },
                },
            },
        },
        tokens: {
            fonts: {
                heading: {value: "'Roboto-Mono', sans-serif"},
                body: {value: "'Roboto-Mono', sans-serif"},
            },
        },

    },
})

export const theme = createSystem(defaultConfig, customConfig)
