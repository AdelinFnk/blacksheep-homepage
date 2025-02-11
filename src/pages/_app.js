import { Provider } from "@/components/ui/provider"
import Layout from "../components/layout/main"

const Website = ({ children, Component, pageProps, router }) => {
    return (
        <Provider suppressHydrationWarning>
            {children}
            <Layout router={router}>
                <Component {...pageProps} key={router.route} />
            </Layout>
        </Provider>
    )
}

export default Website