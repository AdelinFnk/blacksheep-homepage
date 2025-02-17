import {
    useColorMode,
    useColorModeValue,
    ColorModeIcon,
    ColorModeButton
} from "@/components/ui/color-mode";



const ThemeToggleButton = () => {
    const { toggleColorMode } = useColorMode()

    const bg = useColorModeValue("#1a032e", "#bbf7d0")
    const color = useColorModeValue("#bbf7d0", "#1a032e")
    return (
        <ColorModeButton color={color} bg={bg}>

        </ColorModeButton>
    )
}

export default ThemeToggleButton