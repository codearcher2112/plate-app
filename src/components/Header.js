import Logo from '@/components/Logo';
import ModeToggle from '@/components/ModeToggle';
import GitHubLink from '@/components/GitHubLink';

const Header = () => {
    return (
        <header className="header sticky top-0 z-40 w-full backdrop-blur shadow-md flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.5] bg-white/95 supports-backdrop-blur:bg-white/60 dark:shadow-none dark:bg-transparent">
            <div className="header__container container mx-auto px-4">
                <div className="header__inner flex justify-between items-center py-4">
                    <Logo className={"w-16"} />

                    <div className="flex items-center gap-2">
                        <ModeToggle />
                        <GitHubLink />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
