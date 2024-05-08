import { useState } from 'react';
import { Link } from 'react-router-dom';
import reactLogo from '../assets/react.svg';

const Navbar = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? '' : 'dark');
  };

  return (
    <header className={`${theme} ${theme ? 'bg-navy' : 'bg-white'} w-full`}>
      <nav className=" navbar mx-auto max-w-screen-2xl font-semibold text-slate-700">
        <div className="flex-1 gap-4 ">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden dark:text-light-slate dark:hover:bg-light-slate dark:hover:text-light-navy"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-2 min-w-80 rounded-box py-3 shadow dark:bg-light-navy"
            >
              <li>
                <Link
                  to="/"
                  className="py-3 text-2xl
                  hover:bg-slate-200 dark:text-light-slate dark:hover:bg-light-slate dark:hover:text-light-navy"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="py-3 text-2xl
                  hover:bg-slate-200 dark:text-light-slate dark:hover:bg-light-slate dark:hover:text-light-navy"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="py-3 text-2xl
                  hover:bg-slate-200 dark:text-light-slate dark:hover:bg-light-slate dark:hover:text-light-navy"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            // className="hover:rounded-md  hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            <img src={reactLogo} alt="React Logo" className="size-12" />
          </Link>
        </div>

        <nav className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl dark:text-light-slate">
            <li>
              <Link
                to="/"
                className="hover:bg-slate-200 dark:hover:bg-light-slate dark:hover:text-slate-900"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="hover:bg-slate-200 dark:hover:bg-light-slate dark:hover:text-slate-900"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:bg-slate-200 dark:hover:bg-light-slate dark:hover:text-slate-900"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </nav>
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-center px-10">
        <div className="h-px w-full bg-slate-200 dark:bg-bright-green"></div>
      </div>
      <button onClick={toggleTheme}>Test</button>
    </header>
  );
};

export default Navbar;
