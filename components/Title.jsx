import { GithubIcon } from './icons/github';

export const Title = () => (
  <div className="flex flex-col justify-center h-full text-center">
    <h1 className="text-4xl">Brendan Davies</h1>
    <p className="m-2 overflow-hidden">Software Engineer</p>
    <div>
      <a href="https://github.com/BrendanDavies">
        <GithubIcon className="m-auto" />
      </a>
    </div>
  </div>
);

export default Title;
