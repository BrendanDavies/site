import classNames from 'classnames';
import Link from 'next/link';
import { useRef, useState } from 'react';
import Menu from './icons/Menu';
import Icon from '../images/icon.svg';
import IconLong from '../images/icon-long.svg';
import { useOnClickOutside } from './hooks/outside-click';

const HeaderLink = ({ children, href }) => (
  <li className="p-6 font-semibold text-center md:p-4">
    <Link href={href}>
      <a className="p-3" href={href}>
        {children}
      </a>
    </Link>
  </li>
);

export const Header = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [hasBeenToggled, setMenuToggled] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setExpanded(false));

  return (
    <header
      className="flex justify-between md:justify-around bg-primary text-on-primary"
      ref={node}
    >
      <Icon className="inline-block w-8 h-8 mx-8 my-4 md:mx-12 md:hidden"></Icon>
      <IconLong className="hidden h-8 mx-8 my-4 md:mx-12 md:inline-block"></IconLong>
      <nav>
        <button
          className="mobile-btn md:hidden"
          onClick={() => {
            if (!hasBeenToggled) setMenuToggled(true);
            setExpanded(currentValue => !currentValue);
          }}
          title="Toggle navigation"
        >
          <Menu className="w-8 h-6 m-4" isExpanded={isExpanded}></Menu>
        </button>
        <ul
          className={classNames(
            'fixed right-auto md:static max-w-2xl md:flex bg-primary z-10 md:opacity-100',
            {
              /** Only add animation properties on first toggle */
              'transition-all transform duration-500 ease-in-out': hasBeenToggled,
              '-translate-x-16 opacity-100': isExpanded,
              'translate-x-32 opacity-0': !isExpanded
            }
          )}
          onClick={() => {
            setExpanded(false);
          }}
        >
          <HeaderLink href="/">home</HeaderLink>
          <HeaderLink href="/about">about</HeaderLink>
          <HeaderLink href="/contact">contact</HeaderLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
