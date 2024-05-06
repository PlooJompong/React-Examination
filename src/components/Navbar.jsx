import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-center h-24 mx-5 bg-slate-100">
      <ul className="flex justify-between items-center gap-20 text-xl text-slate-500 ">
        <Link to="/">
          <li className="border-2 border-slate-300 rounded-lg bg-slate-200 px-4 py-2 hover:border-slate-400">
            About Me
          </li>
        </Link>
        <Link to="/projects">
          <li className="border-2 border-slate-300 rounded-lg bg-slate-200 px-4 py-2 hover:border-slate-400">
            Projects
          </li>
        </Link>
        <Link to="/contact">
          <li className="border-2 border-slate-300 rounded-lg bg-slate-200 px-4 py-2 hover:border-slate-400">
            Contact
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
