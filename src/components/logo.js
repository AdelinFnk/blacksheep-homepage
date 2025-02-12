import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import { css, jsx } from '@emotion/react';
import MyIcon from "@/components/icon";


const LogoBox = ({ children }) => (
    <span
        style={css`
      font-weight: bold;
      font-size: 20px;
      display: inline-flex;
      align-items: center;
      height: 30px;
      line-height: 20px;
      padding: 10px;

            svg {
                transition: 200ms ease;
            }

            &:hover img {
        transform: rotate(20deg);
      }
    `}
    >
    {children}
  </span>
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