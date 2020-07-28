import { GithubIcon } from './icons/github';

export const Title = () => (
  <div className="p-8 m-auto">
    <h1 className="text-4xl">Brendan Davies</h1>
    <p className="m-2 overflow-hidden">Software Engineer</p>
    <span>
      <a href="https://github.com/BrendanDavies">
        <GithubIcon className="m-auto" />
      </a>
    </span>
  </div>
);

export default Title;
