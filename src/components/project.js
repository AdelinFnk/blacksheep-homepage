import NextLink from "next/link";
import { Heading, Box, Image, Badge } from "@chakra-ui/react";
import { TiChevronRight } from "react-icons/ti";

export const Title = ({ children }) => (
    <Box display="ruby">
        <NextLink href="/projects">Projects</NextLink>
        <span>
            &nbsp;
            <TiChevronRight />
            &nbsp;
        </span>
        <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
            {children}
        </Heading>
    </Box>

)

export const ProjectImage = ({ src, alt }) => (
    <Image borderRadius="xl" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
    <Badge colorPalette="green" mr={2}>
        {children}
    </Badge>
)