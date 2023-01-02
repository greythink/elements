import { AppProps } from 'next/app';
import { Mali } from '@next/font/google';
import '../styles/main.css';



const fontMali = Mali({
    weight: ['600', '700'],
    subsets: ['latin'],
    variable: '--font-mali',
});



export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={fontMali.variable}>
            <Component {...pageProps} />
        </main>
    );
}
