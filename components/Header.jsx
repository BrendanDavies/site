import { useState } from 'react';

export const Header = () => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <header>
      {/* <nav className="absolute md:static">
        <button
          className="mobile-btn"
          onClick={() => setExpanded(currentValue => !currentValue)}
          title="Toggle navigation"
        >
          Toggle navigation
        </button>
        {isExpanded && (
          <ul className="">
            <li className="">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        )}
      </nav> */}
    </header>
  );
};

export default Header;
