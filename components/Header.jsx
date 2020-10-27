import classNames from 'classnames';
import Link from 'next/link';
import { useRef, useState } from 'react';
import Menu from './icons/Menu';
import Icon from '../images/icon.svg';
import { useOnClickOutside } from './hooks/outside-click';

const HeaderLink = ({ children, href }) => (
  <li className="p-6 text-center uppercase md:p-4">
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
    <header
      className="flex justify-between bg-primary text-on-primary"
      ref={node}
    >
      <Icon className="inline-block w-8 h-8 mx-8 my-4 md:mx-12"></Icon>
      <nav>
        <button
          className="mobile-btn md:hidden"
          onClick={() => setExpanded(currentValue => !currentValue)}
          title="Toggle navigation"
        >
          <Menu className="w-8 h-6 m-4" isExpanded={isExpanded}></Menu>
        </button>
        <ul
          className={classNames(
            'fixed right-auto md:static max-w-2xl md:flex transform bg-primary duration-500 ease-in-out md:transform-none z-10',
            {
              '-translate-x-16': isExpanded,
              'translate-x-32': !isExpanded
            }
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
