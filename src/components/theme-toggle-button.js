import {
    useColorModeValue,
    ColorModeButton,
} from "./ui/color-mode";
import { motion, AnimatePresence } from "framer-motion"

const ThemeToggleButton = () => {

    const bg = useColorModeValue("#6c584c", "#f0ead2")
    const color = useColorModeValue("#f0ead2", "#6c584c")

    return (

        <AnimatePresence mode='wait' initial={false}>
            <motion.div
                variants={{
                    initial: { display: 'inline-block', y: -20, opacity: 0 },
                    animate: { display: 'inline-block', y: 0, opacity: 1 },
                    exit: { display: 'inline-block', y: 20, opacity: 0 },
                }}
                key={useColorModeValue('light', 'dark')}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.2 }}
            >
                <ColorModeButton color={color} bg={bg} />
            </motion.div>
        </AnimatePresence>
    )
}

export default ThemeToggleButton