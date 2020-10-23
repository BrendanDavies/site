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
      <nav className="static overflow-hidden text-right bg-primary">
        <button
          className="text-right mobile-btn md:hidden"
          onClick={() => setExpanded(currentValue => !currentValue)}
          title="Toggle navigation"
        >
          <Menu className="w-8 h-6 m-4" isExpanded={isExpanded}></Menu>
        </button>
        <ul
          className={classNames(
            'absolute right-0 md:relative max-w-2xl m-auto md:flex transform bg-primary duration-500 ease-in-out md:translate-x-0 opacity-0 md:opacity-100',
            {
              'translate-x-0 opacity-100': isExpanded,
              'translate-x-32 opacity-0': !isExpanded
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
