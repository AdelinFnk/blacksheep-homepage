"use client"

import { Box, Button, Stack } from "@chakra-ui/react"
import { useColorMode, useColorModeValue } from "@/components/ui/color-mode"

const Demo = () => {
    const { toggleColorMode } = useColorMode()

    const bg = useColorModeValue("red.500", "red.200")
    const color = useColorModeValue("white", "gray.800")

    return (
        <Stack align="flex-start" gap="4">
            <Button variant="outline" size="sm" onClick={toggleColorMode}>
                Toggle Mode
            </Button>
        </Stack>
    )
}

export default Demo