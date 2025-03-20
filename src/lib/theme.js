import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"


const customConfig = defineConfig({
    theme: {
        textStyles: {
            body: {
                value: {
                    textDecoration: "underline",
                    fontSize: "20px",
                    textUnderlineOffset: "8px",
                    textDecorationColor: {_light: "#a98467", _dark: "#adc178"},
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
                        value: {_light: "#a98467", _dark: "#adc178"}
                    },
                    linkNavBg: {
                        value: {_light: "#6c584c", _dark: "#f0ead2"}
                    },
                    linkNavText: {
                        value: {_light: "#f0ead2", _dark: "#6c584c"}
                    },
                    linkNavInactive: {
                        value: {_light: "#6c584c", _dark: "#f0ead2"}
                    },
                },
                bg: {
                    DEFAULT: {
                        value: {_light: "#dde5b6", _dark: "#6c584c"}, // Custom dark background
                    },
                    element: {
                        value: {_light: "#6c584c", _dark: "#f0ead2"},
                    },
                    link: {
                        value: {_light: "#6c584c", _dark: "#f0ead2"},
                    },
                },
                fg: {
                    DEFAULT: {
                        value: {_light: "#6c584c", _dark: "#f0ead2"}, // Custom dark text color
                    },
                    element: {
                        value: {_light: "#f0ead2", _dark: "#6c584c"}, // Custom dark text color
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
