import Image from 'next/image';
import logo from '../public/media/element_school_logo_2000w.png';



export default function Home() {
    return (
        <Image
            src={logo}
            width={800}
            alt="The Elements School logo"
        />
    );
}