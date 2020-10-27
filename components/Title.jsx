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
    <Icon className="w-12 h-12" />
  </a>
);

export const Title = () => (
  <Card className="w-4/5 md:w-2/4">
    <h1 className="text-4xl border-b-2 md:text-5xl text-primary border-secondary">
      Brendan Davies
    </h1>
    <p className="m-2 overflow-hidden text-base md:text-2xl text-primary">
      Software Engineer
    </p>
    <span className="flex justify-center m-auto text-primary">
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
