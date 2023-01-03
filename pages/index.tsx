import Image from 'next/image';
import logo from '../public/media/element_school_logo_2000w.png';



export default function Home() {
    return (
        <section>
            <header className="flex flex-col items-center">
                <h1 className="xs:w-5/6 sm:w-2/3 md:w-1/2 lg:w-1/3">
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
                <h2 className="mt-20 text-2xl sm:text-3xl text-brand-red leading-relaxed">
                    <span className="font-bold uppercase">
                        Admissions Open
                    </span>
                    <br />
                    Pre-Nursery, Nursery, L-KG and U-KG
                </h2>
                <h2 className="mt-20 text-2xl">
                    Website Coming Soon
                </h2>
            </section>
        </section>
    );
}
