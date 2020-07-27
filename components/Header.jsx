import classNames from 'classnames';
import Link from 'next/link';
import { useState } from 'react';
import Menu from './icons/Menu';

export const Header = () => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <header className="block">
      <nav className="absolute md:static">
        <button
          className="mobile-btn md:hidden"
          onClick={() => setExpanded(currentValue => !currentValue)}
          title="Toggle navigation"
        >
          <Menu className="w-8 h-6 m-4" isExpanded={isExpanded}></Menu>
        </button>

        <ul
          className={classNames(
            'backdrop-blur bg-black bg-opacity-25 md:flex',
            {
              hidden: !isExpanded
            }
          )}
        >
          <li className="flex-1 p-3 text-center md:p-6">
            <Link href="/">
              <a className="smoothscroll" href="/home">
                Home
              </a>
            </Link>
          </li>
          <li className="flex-1 p-3 text-center md:p-6">
            <Link href="/about">
              <a className="smoothscroll" href="/about">
                About
              </a>
            </Link>
          </li>
          <li className="flex-1 p-3 text-center md:p-6">
            <Link href="/contact">
              <a className="smoothscroll" href="/contact">
                Contact
              </a>
            </Link>
          </li>
          <li className="flex-1 p-3 text-center md:p-6">
            <a
              className="smoothscroll"
              href="https://brendandavies.github.io/resume/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
