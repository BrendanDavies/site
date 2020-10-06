import { Card } from '../components/Card.tsx';

import GithubIcon from '../images/github-light.svg';
import ResumeIcon from '../images/resume.svg';

const LinkIcon = ({ Icon, href, text }) => (
  <a
    aria-label={text}
    className="p-3"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon className="w-8 h-8" />
  </a>
);

export const Title = () => (
  <Card className="w-4/5 md:w-2/4">
    <h1 className="text-4xl">Brendan Davies</h1>
    <p className="m-2 overflow-hidden">Software Engineer</p>
    <span className="flex justify-center m-auto">
      <LinkIcon
        text="Github"
        href="https://github.com/BrendanDavies"
        Icon={GithubIcon}
      />
      <LinkIcon
        text="Resume"
        href="https://brendandavies.github.io/resume/"
        Icon={ResumeIcon}
      />
    </span>
  </Card>
);

export default Title;
