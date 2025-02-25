import { Provider } from "@/components/ui/provider"
import Layout from "@/components/layout/main"
import {Theme} from "@/lib/theme";
import Fonts from "@/components/fonts";
import { AnimatePresence } from "framer-motion"


const Website = ({ children, Component, pageProps, router }) => {
    return (
        <Provider suppressHydrationWarning value={Theme}>
            {children}
            <Fonts />
            <Layout router={router} >
                <AnimatePresence exitBeforeEnter initial={true}>
                <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </Provider>
    )
}

export default Website