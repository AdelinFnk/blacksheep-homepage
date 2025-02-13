import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import MyIcon from "@/components/icon";
import { chakra } from '@chakra-ui/react';

const LogoBox = ({ children }) => (
    <chakra.span
        style={{
            fontWeight: 'bold',
            fontSize: '20px',
            display: 'inline-flex',
            alignItems: 'center',
            height: '30px',
            lineHeight: '20px',
            padding: '10px',
        }}
        _hover={{
            '& > svg': {
                transform: 'scale(1.3)',
                transition: '200ms ease',
            },
        }}

    >
        {children}
    </chakra.span>
);

const Logo = () => {
    return (
        <Link href="/" legacyBehavior>
            <a>
                <LogoBox>
                    <MyIcon />
                    <Text
                        fontFamily='M PLUS Rounded 1c'
                        fontWeight="bold"
                        ml={3}
                    >
                        BlackSheep
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo