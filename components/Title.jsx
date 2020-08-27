import GithubIcon from '../images/github.svg';
import ResumeIcon from '../images/resume.svg';

export const Title = () => (
  <div>
    <h1 className="text-4xl">Brendan Davies</h1>
    <p className="m-2 overflow-hidden">Software Engineer</p>
    <span className="flex justify-center m-auto">
      <a
        href="https://github.com/BrendanDavies"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon className="w-8 h-8" />
      </a>
      <a
        href="https://brendandavies.github.io/resume/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ResumeIcon className="w-8 h-8" />
      </a>
    </span>
  </div>
);

export default Title;
