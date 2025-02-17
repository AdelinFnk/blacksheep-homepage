import { Provider } from "@/components/ui/provider"
import Layout from "@/components/layout/main"
import {Theme} from "@/lib/theme";
import Fonts from "@/components/fonts";


const Website = ({ children, Component, pageProps, router }) => {
    return (
        <Provider suppressHydrationWarning value={Theme}>
            {children}
            <Fonts />
            <Layout router={router} >
                <Component {...pageProps} key={router.route} />
            </Layout>
        </Provider>
    )
}

export default Website