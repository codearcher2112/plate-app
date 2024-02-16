'use client'

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { SlSocialFacebook, SlSocialInstagram } from 'react-icons/sl';
import { TiSocialLinkedin, TiSocialYoutube } from 'react-icons/ti';

const socialLinks = [
    { href: 'https://www.instagram.com', icon: <SlSocialInstagram className="w-full h-full" /> },
    { href: 'https://www.linkedin.com', icon: <TiSocialLinkedin className="w-full h-full" /> },
    { href: 'https://www.facebook.com', icon: <SlSocialFacebook className="w-full h-full" /> },
    { href: 'https://www.youtube.com', icon: <TiSocialYoutube className="w-full h-full" /> },
];

const SocialLinks = ({ className = '' }) => {
    const staggerDelay = (index) => index * 0.1;

    return (
        <ul className={`${className} gap-1.5`}>
            <AnimatePresence>
                {socialLinks.map((link, index) => (
                    <motion.li
                        key={index}
                        initial={ {
                            opacity: 0,
                            transform: 'scale(0.5)'
                        } }
                        whileInView={ {
                            opacity: 1,
                            transform: 'scale(1)'
                        } }
                        exit={ {
                            opacity: 0,
                        } }
                        transition={ { duration: 0.6, ease: 'easeInOut', delay: staggerDelay(index), } }
                        viewport={{ once: true, amount: 0.7 }}
                    >
                        <Link
                            className="block w-10 h-10 p-2 bg-black text-white rounded-full hover:bg-red-600 dark:bg-white dark:text-black dark:hover:bg-red-600"
                            target={link.target || "_blank"}
                            href={link.href}
                        >
                            {link.icon}
                        </Link>
                    </motion.li>
                ))}
            </AnimatePresence>
        </ul>
    );
};

export default SocialLinks;
