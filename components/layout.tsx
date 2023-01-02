import { ReactNode } from 'react';
import { Mali } from '@next/font/google';
import Footer from './footer';



const fontMali = Mali({
    weight: ['600', '700'],
    subsets: ['latin'],
    variable: '--font-mali',
});



export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="container my-24">
            <main className={fontMali.variable}>
                {children}
            </main>
            <Footer />
        </div>
    );
}
