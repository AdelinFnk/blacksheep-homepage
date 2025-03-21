import {Flex} from "@chakra-ui/react";

const Footer = () => {
    return (
        <Flex justify="center" align="center" opacity={0.5} fontSize="sm">
            &copy; {new Date().getFullYear()} Build with ❤️ by Adelin!
        </Flex>
    )
}

export default Footer