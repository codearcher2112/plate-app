import Link from 'next/link';
import Image from 'next/image';
import logoImage from '/public/icons/icon-192x192.png';

const Logo = ({ className = '' }) => {
    return (
        <Link href="/" className={`block hover:opacity-65 ${className}`}>
            <Image src={logoImage} alt="Plate logo" width={192} height={192} />
        </Link>
    )
}

export default Logo;
