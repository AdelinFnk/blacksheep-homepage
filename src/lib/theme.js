import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"


const customConfig = defineConfig({
    theme: {
        textStyles: {
            body: {
                value: {
                    textDecoration: "underline",
                    fontSize: "20px",
                    textUnderlineOffset: "8px",
                    textDecorationColor: {_light: "#a98467", _dark: "#c3b232"},
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
                        value: {_light: "#a98467", _dark: "#200048"}
                    },
                    linkNavBg: {
                        value: {_light: "#6c584c", _dark: "#c3b232"}
                    },
                    linkNavText: {
                        value: {_light: "#f0ead2", _dark: "#130d01"}
                    },
                    linkNavInactive: {
                        value: {_light: "#6c584c", _dark: "#c3b232"}
                    },
                },
                bg: {
                    DEFAULT: {
                        value: {_light: "#dde5b6", _dark: "#130d01"}, // Custom dark background
                    },
                    element: {
                        value: {_light: "#6c584c", _dark: "#200048"},
                    },
                    link: {
                        value: {_light: "#6c584c", _dark: "#c3b232"},
                    },
                },
                fg: {
                    DEFAULT: {
                        value: {_light: "#6c584c", _dark: "#79d7a8"}, // Custom dark text color
                    },
                    element: {
                        value: {_light: "#f0ead2", _dark: "#c3b232"}, // Custom dark text color
                    },
                },
            },
        },
        tokens: {
            fonts: {
                heading: {value: "'VT323', monospace;, sans-serif"},
                body: {value: "'VT323', monospace;, sans-serif"},
            },
        },

    },
})

export const theme = createSystem(defaultConfig, customConfig)
