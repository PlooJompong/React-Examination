import { useState } from 'react';
import { Link } from 'react-router-dom';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';

const Footer = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? '' : 'dark');
  };

  return (
    <footer className={`${theme} ${theme ? 'bg-navy' : 'bg-white'} w-full`}>
      <div
        className={`footer footer-center rounded px-10 pb-10 text-base text-slate-700 dark:text-light-slate`}
      >
        <button onClick={toggleTheme}>Test</button>
        <div className="flex w-full max-w-screen-2xl items-center justify-center">
          <div className="h-px w-full bg-slate-200 dark:bg-bright-green"></div>
        </div>
        <nav className="grid grid-flow-col gap-4 ">
          <Link to="/" className="link-hover link">
            About
          </Link>
          <Link to="/projects" className="link-hover link">
            Projects
          </Link>
          <Link to="/contact" className="link-hover link">
            Contact
          </Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.linkedin.com/in/ploo-jompong-8564bb187/"
              target="_blank"
            >
              <img
                src={linkedin}
                alt="linkedin logo"
                className="size-10 rounded-md hover:bg-white hover:outline"
              />
            </a>
            <a href="https://github.com/PlooJompong" target="_blank">
              <img
                src={github}
                alt="github logo"
                className="size-10 rounded-md hover:bg-white hover:outline"
              />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
