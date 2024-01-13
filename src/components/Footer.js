import Logo from '@/components/Logo';

const Footer = () => {
    return (
        <footer className="footer lg:border-t lg:border-slate-900/10 dark:border-slate-50/[0.5] bg-white/95 dark:bg-transparent">
            <div className="footer__container container mx-auto px-4">
                <div className="footer__inner flex justify-between items-center gap-5 py-8">
                    <Logo className={"w-20"} />

                    <div className="footer__copywrite text-slate-500 dark:text-slate-100">
                        Copyright © 2024 Plate LLC. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
