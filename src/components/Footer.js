import Logo from '@/components/Logo';
import { Link } from 'next/link';
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";
import { SlSocialFacebook } from "react-icons/sl";
import { TiSocialYoutube } from "react-icons/ti";


const Footer = () => {
    return (
        <footer className="footer border-t border-slate-900/10 dark:border-slate-50/[0.5] bg-white/95 dark:bg-transparent">
            <div className="footer__container container mx-auto px-4">
                <div className="footer__inner flex justify-between items-center gap-5 py-8">
                    <Logo className={"w-20"} />
                    <div className='footer__social'>
                        <div >
                            <ul className='flex'>
                                <li>
                                    <a className='block w-10 h-10' target='_blank' href = 'https://www.instagram.com'>
                                        <SlSocialInstagram className='w-full h-full' />
                                    </a>
                                </li>
                                 <li>
                                    <a className='block w-10 h-10' href='https://www.linkedin.com'>
                                        <TiSocialLinkedin className='w-full h-full' />
                                    </a>
                                </li>

                                <li>
                                    <a className='block w-10 h-10' target="_blank" href='https://www.facebook.com'>
                                        <SlSocialFacebook className='w-full h-full' />
                                    </a>
                                </li>

                                <li>
                                    <a className='block w-10 h-10' href='https://www.youtube.com'>
                                        <TiSocialYoutube className='w-full h-full' />
                                    </a>
                                </li>
                            </ul>
                        </div>
                            
                        <div className="footer__copywrite text-slate-500 dark:text-slate-100 ">
                            Copyright © 2024 Plate LLC. All rights reserved.
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer;
