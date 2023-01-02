import Image from 'next/image';
import logo from '../public/media/element_school_logo_2000w.png';



export default function Home() {
    return (
        <section className="container mt-24">
            <header className="flex flex-col items-center">
                <h1 className="w-1/3">
                    <Image
                        src={logo}
                        width={800}
                        alt="The Elements School logo"
                    />
                    <span className="sr-only">
                        The Elements School
                    </span>
                </h1>
            </header>
            <section className="max-w-prose mx-auto text-center">
                <h2 className="mt-20 text-3xl text-brand-red leading-relaxed">
                    Pre-Nursery, Nursery and L-KG
                    <br />
                    <span className="font-bold uppercase">
                        Admissions Open
                    </span>
                </h2>
                <h2 className="mt-20 text-2xl">
                    Website Coming Soon
                </h2>
                <p className="mt-20 text-2xl leading-relaxed">
                    74/1, Main Road, near Sai Plaza, Kanker Khera
                    <br />
                    Meerut Cantt, Meerut
                </p>
            </section>
        </section>
    );
}
