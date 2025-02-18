import { motion } from 'framer-motion'
import { chakra } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'

const StyledDiv = chakra('div')

const MotionDiv = motion.create(StyledDiv)

const Section = ({ children, delay = 0 }) => (
    <AnimatePresence>
        <MotionDiv
            variants={{
                initial: { y: 10, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                exit: { y: 10, opacity: 0 },
            }}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.8, delay }}
            mb={6}
        >
            {children}
        </MotionDiv>
    </AnimatePresence>
)

export default Section