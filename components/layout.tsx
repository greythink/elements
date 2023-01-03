import { ReactNode } from 'react';
import { Mali, Nunito } from '@next/font/google';
import Footer from './footer';



const fontTitle = Mali({
    weight: ['600', '700'],
    subsets: ['latin'],
    variable: '--font-title',
});
const fontBody = Nunito({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-body',
});



export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className={`page-wrapper ${fontTitle.variable} ${fontBody.variable} container my-24`}>
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}
