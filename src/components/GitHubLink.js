import { GitHubLogoIcon } from '@radix-ui/react-icons';

const GitHubLink = () => {
    return (
        <a
            href={"https://github.com/codearcher2112/plate-app"}
            target={"_blank"}
            className={"flex justify-center items-center w-10 h-10 p-2 hover:text-brand-color-1"}
        >
            <GitHubLogoIcon className={"w-full h-full"} />
        </a>
    )
}

export default GitHubLink;
