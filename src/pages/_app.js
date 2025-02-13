import { Provider } from "@/components/ui/provider"
import Layout from "../components/layout/main"
import {system} from "@chakra-ui/react/preset";


const Website = ({ children, Component, pageProps, router }) => {
    return (
        <Provider suppressHydrationWarning value={system}>
            {children}
            <Layout router={router}>
                <Component {...pageProps} key={router.route} />
            </Layout>
        </Provider>
    )
}

export default Website