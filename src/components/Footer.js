import Logo from '@/components/Logo';
import SocialLinks from "@/components/SocialLinks";

const Footer = () => {
    return (
        <footer className="footer border-t border-slate-900/10 dark:border-slate-50/[0.5] bg-white/95 dark:bg-transparent">
            <div className="footer__container container mx-auto px-4">
                <div className="footer__inner flex flex-col justify-between items-center gap-5 py-8 sm:flex-row">
                    <Logo className={"w-20"} />

                    <div className="footer__column-right text-center sm:text-right">
                        <SocialLinks className="inline-flex mb-5 lg:hidden lg:mb-0" />

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
