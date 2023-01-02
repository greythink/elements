import Image from 'next/image';
import logo from '../public/media/element_school_logo_2000w.png';



export default function Home() {
    return (
        <section className="container mt-24 flex flex-col items-center">
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
        </section>
    );
}
