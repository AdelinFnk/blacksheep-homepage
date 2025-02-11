import { Button, Stack, Theme } from "@chakra-ui/react"

const Demo = () => {
    return (
        <Stack align="flex-start">
            <Button variant="surface" colorPalette="teal">
                apasa
            </Button>
            <Theme p="4" appearance="dark" colorPalette="teal">
                <Button variant="surface">Dark Button</Button>
            </Theme>
            <Theme p="4" appearance="light" colorPalette="teal">
                <Button variant="surface">Light Button</Button>
            </Theme>
        </Stack>
    )
}

export default Demo