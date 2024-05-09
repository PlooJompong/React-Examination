import { useSelector, useDispatch } from 'react-redux';
import { toggleActions } from '../store/slices/themeSlice';
import { Link } from 'react-router-dom';
import reactLogo from '../assets/react.svg';
import Toggle from './Toggle';

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const toggleTheme = () => {
    dispatch(toggleActions.toggleTheme());
  };

  return (
    <header
      className={`${theme} ${theme ? 'bg-navy' : 'bg-white'} w-full pt-10`}
    >
      <nav className="navbar mx-auto max-w-screen-2xl font-semibold text-slate-700">
        <div className=" mr-auto gap-4">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost md:hidden dark:text-light-slate dark:hover:bg-light-slate dark:hover:text-light-navy"
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
              className="text-light-navy-700 menu dropdown-content menu-sm z-[1] mt-2 min-w-80 rounded-box bg-light-slate py-3 text-slate-700 shadow dark:bg-light-navy"
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
          <Link to="/">
            <img src={reactLogo} alt="React Logo" className="size-12" />
          </Link>
        </div>

        <nav className="hidden md:flex">
          <ul className="menu menu-horizontal items-center justify-center px-1 py-0 text-xl dark:text-light-slate">
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
        <Toggle onClick={toggleTheme} />
      </nav>
      <div className="mx-auto mt-5 flex w-full max-w-screen-2xl items-center justify-center px-10">
        <div className="h-px w-full bg-slate-200 dark:bg-bright-green"></div>
      </div>
    </header>
  );
};

export default Navbar;
