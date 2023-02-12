import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/component/layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    // 实现layout模板，套在主体上
    <Layout>
        <Component {...pageProps} />
    </Layout>
    )
}
