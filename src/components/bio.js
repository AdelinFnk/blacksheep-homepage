import { Box, Text } from '@chakra-ui/react';

export const BioSection = (props) => (
    <Box
        css={{
            display: "flex",


        }}
        {...props}
    />
);

export const BioYear = (props) => (
    <Text
        css={{
            fontWeight: 'bold',
            marginRight: '1em',
        }}
        {...props}
    />
);