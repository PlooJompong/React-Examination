import { Link } from 'react-router-dom';
import reactLogo from '../assts/react.svg';

const Navbar = () => {
  return (
    <>
      <header className="navbar max-w-screen-2xl bg-white font-semibold text-slate-700">
        <nav className="flex-1">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu dropdown-content menu-sm z-[1] mt-2 min-w-80 rounded-box bg-white py-3 shadow"
            >
              <li>
                <Link to="/" className="py-3 text-3xl hover:bg-slate-200">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="py-3 text-3xl hover:bg-slate-200"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="py-3 text-3xl hover:bg-slate-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-2xl font-bold">
            <img src={reactLogo} alt="React Logo" className="size-12" />
          </Link>
        </nav>

        <nav>
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-xl">
              <li>
                <Link to="/" className="hover:bg-slate-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:bg-slate-200">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:bg-slate-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="flex w-full max-w-screen-2xl items-center justify-center">
        <div className="h-px w-full bg-slate-200"></div>
      </div>
    </>
  );
};

export default Navbar;
