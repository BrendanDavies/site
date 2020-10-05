import GithubIcon from '../images/github-light.svg';
import ResumeIcon from '../images/resume.svg';

const LinkIcon = ({ Icon, href }) => (
  <a className="p-3" href={href} target="_blank" rel="noopener noreferrer">
    <Icon className="w-8 h-8" />
  </a>
);

export const Title = () => (
  <div>
    <h1 className="text-4xl">Brendan Davies</h1>
    <p className="m-2 overflow-hidden">Software Engineer</p>
    <span className="flex justify-center m-auto">
      <LinkIcon href="https://github.com/BrendanDavies" Icon={GithubIcon} />
      <LinkIcon
        href="https://brendandavies.github.io/resume/"
        Icon={ResumeIcon}
      />
    </span>
  </div>
);

export default Title;
