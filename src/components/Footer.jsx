import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import linkedinDark from '../assets/linkedin_dark.svg';
import linkedinLight from '../assets/linkedin_light.svg';
import githubDark from '../assets/github_dark.svg';
import githubLight from '../assets/github_light.svg';

const Footer = () => {
  //  Get theme from store.js
  const theme = useSelector((state) => state.theme.theme);

  return (
    <footer className="footer footer-center rounded px-10 pb-10 font-fira text-base">
      <div className="flex w-full max-w-screen-2xl items-center justify-center">
        <div
          className={`${theme ? 'bg-bright-green' : 'bg-bright-purple'} h-px w-full`}
        ></div>
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
              src={theme === 'dark' ? linkedinDark : linkedinLight}
              alt="linkedin logo"
              className="size-10"
            />
          </a>
          <a href="https://github.com/PlooJompong" target="_blank">
            <img
              src={theme === 'dark' ? githubDark : githubLight}
              alt="github logo"
              className="size-10"
            />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
