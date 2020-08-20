import classNames from 'classnames';
import Link from 'next/link';
import { useRef, useState } from 'react';
import Menu from './icons/Menu';
import { useOnClickOutside } from './hooks/outside-click';

export const Header = () => {
  const [isExpanded, setExpanded] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setExpanded(false));

  return (
    <header className="h-12" ref={node}>
      <nav className="absolute z-10 md:static">
        <button
          className="mobile-btn md:hidden"
          onClick={() => setExpanded(currentValue => !currentValue)}
          title="Toggle navigation"
        >
          <Menu className="w-8 h-6 m-4" isExpanded={isExpanded}></Menu>
        </button>

        <ul
          className={classNames(
            'backdrop-blur bg-black bg-opacity-25 md:flex transform duration-500 ease-in-out md:translate-x-0 opacity-0 md:opacity-100',
            {
              'translate-x-0 opacity-100': isExpanded,
              '-translate-x-32 opacity-0': !isExpanded
            }
          )}
          onClick={() => setExpanded(false)}
        >
          <li className="flex-1 p-4 text-center md:p-6">
            <Link href="/">
              <a className="p-3" href="/home">
                Home
              </a>
            </Link>
          </li>
          <li className="flex-1 p-4 text-center md:p-6">
            <Link href="/about">
              <a className="p-3" href="/about">
                About
              </a>
            </Link>
          </li>
          <li className="flex-1 p-4 text-center md:p-6">
            <Link href="/contact">
              <a className="p-3" href="/contact">
                Contact
              </a>
            </Link>
          </li>
          <li className="flex-1 p-4 text-center md:p-6">
            <a
              className="p-3"
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
