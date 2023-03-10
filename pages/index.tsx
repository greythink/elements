import Head from 'next/head';
import Image from 'next/image';
import logo from '../public/media/element_school_logo_2000w.png';



export default function Home() {
    return (
        <>
            <Head>
                <title>The Elements School - Admissions Open</title>
                <meta name="description" content="The Elements School is a premium school in Meerut, India. It offers quality education to early learners using scientific methologies that ensure their holistic development." />
            </Head>
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
                    <h2 className="mt-20 mb-2 text-2xl sm:text-4xl text-brand-red uppercase font-bold">
                        Admissions Open
                    </h2>
                    <h3 className="text-lg sm:text-2xl text-brand-red font-medium">
                        Pre-Nursery, Nursery, <span className="break-keep">L-KG</span> and <span className="break-keep">U-KG</span>
                    </h3>
                    <h2 className="mt-20 text-2xl">
                        Website Coming Soon
                    </h2>
                </section>
            </section>
        </>
    );
}
