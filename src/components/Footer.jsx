import { Link } from 'react-router-dom';
import linkedin from '../assts/linkedin.svg';
import github from '../assts/github.svg';

const Footer = () => {
  return (
    <footer className="footer footer-center rounded bg-white p-10 text-base text-slate-700">
      {/* <footer className="footer footer-center p-10 bg-blue-50 rounded text-base text-slate-700"> */}
      <nav className="grid grid-flow-col gap-4">
        <Link to="/" className="link-hover link">
          About
        </Link>
        <Link to="projects" className="link-hover link">
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
            <img src={linkedin} alt="linkedin logo" className="size-10" />
          </a>
          <a href="https://github.com/PlooJompong" target="_blank">
            <img src={github} alt="github logo" className="size-10" />
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2024 - All right reserved by Mr.PLOO</p>
      </aside>
    </footer>
  );
};

export default Footer;
