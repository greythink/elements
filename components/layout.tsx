import { ReactNode } from 'react';
import { Mali } from '@next/font/google';



const fontMali = Mali({
    weight: ['600', '700'],
    subsets: ['latin'],
    variable: '--font-mali',
});



export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <main className={fontMali.variable}>
                {children}
            </main>
        </>
    );
}
