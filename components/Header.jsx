import classNames from 'classnames';
import Link from 'next/link';
import { useRef, useState } from 'react';
import Menu from './icons/Menu';
import Icon from '../images/icon.svg';
import { useOnClickOutside } from './hooks/outside-click';

const HeaderLink = ({ children, href }) => (
  <li className="flex-1 p-4 text-center md:p-6">
    <Link href={href}>
      <a className="p-3" href={href}>
        {children}
      </a>
    </Link>
  </li>
);

export const Header = () => {
  const [isExpanded, setExpanded] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setExpanded(false));

  return (
    <header className="h-12" ref={node}>
      <nav className="static flex justify-between overflow-hidden bg-secondary">
        <Icon className="inline-block w-8 h-8 m-4 md:mx-8 text-cover"></Icon>
        <button
          className="mobile-btn md:hidden"
          onClick={() => setExpanded(currentValue => !currentValue)}
          title="Toggle navigation"
        >
          <Menu className="w-8 h-6 m-4" isExpanded={isExpanded}></Menu>
        </button>
        <ul
          className={classNames(
            'absolute md:static inline-block max-w-2xl md:flex transform bg-secondary duration-500 ease-in-out md:transform-none uppercase'
            // {
            //   'translate-x-0': isExpanded,
            //   'translate-x-32': !isExpanded
            // }
          )}
          onClick={() => setExpanded(false)}
        >
          <HeaderLink href="/">Home</HeaderLink>
          <HeaderLink href="/about">About</HeaderLink>
          <HeaderLink href="/contact">Contact</HeaderLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
