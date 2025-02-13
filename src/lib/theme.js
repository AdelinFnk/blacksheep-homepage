import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
    globalCss: {
        "body": {
            bg: "green.200",
        },
    },
})

export const system = createSystem(defaultConfig, customConfig)