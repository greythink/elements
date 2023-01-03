import { ReactNode } from 'react';
import { Mali, Nunito } from '@next/font/google';
import Footer from './footer';



const fontMali = Mali({
    weight: ['600', '700'],
    subsets: ['latin'],
    variable: '--font-mali',
});
const fontNunito = Nunito({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-nunito',
});



export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className={`page-wrapper ${fontMali.variable} ${fontNunito.variable} container my-24`}>
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}
