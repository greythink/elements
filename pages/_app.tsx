import { AppProps } from 'next/app';
import Layout from '../components/layout';
import '../styles/main.css';



export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
