import NextLink from "next/link";
import Image from "next/image";
import { Box, Text, LinkBox, LinkOverlay} from "@chakra-ui/react";
import { Global } from "@emotion/react";

export const GridItem = ({ children, href, title, thumbnail }) => (
    <Box w="100%" textAlign="center">
        <LinkBox cursor="pointer">
            <Image
                rounded="md"
                src={thumbnail}
                alt={title}
                className="grid-item-thumbnail"
                placeholder="blur"

            />
            <LinkOverlay href={href} target="_blank">
                <Text mt={2}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
);

export const ProjectGridItem = ({ children, id, title, thumbnail }) => (
    <Box w="100%" textAlign="center">
        <LinkBox
            as={NextLink}
            href={`/projects/${id}`}
            scroll={false}
            cursor="pointer"
            >
                <Image
                    rounded="md"
                    src={thumbnail}
                    alt={title}
                    className="grid-item-thumbnail"
                    placeholder="blur"
                />
                <LinkOverlay asChild href={`/projects/${id}`}>
                    <Text mt={2} fontSize={20}>
                        {title}
                    </Text>
                </LinkOverlay>
                <Text fontSize={14}>{children}</Text>

        </LinkBox>
    </Box>
);

export const GridItemStyle = () => (
    <Global
        styles={`
            .grid-item-thumbnail {
                border-radius: 12px;
            }
        `}
        />
);