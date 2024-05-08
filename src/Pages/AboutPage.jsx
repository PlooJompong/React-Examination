import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import ScrollToTop from '../components/ScrollToTop.jsx';
import Navbar from '../components/Navbar.jsx';
import MainContainer from '../components/MainContainer.jsx';
import Footer from '../components/Footer.jsx';
import Button from '../components/Button.jsx';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';

const AboutPage = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <MainContainer>
        <section className="hero-content mb-60 flex-col items-start gap-6">
          <h1 className="mb-8 font-fira text-lg 2xl:text-xl ">
            Hi, my name is
          </h1>
          <h2 className="text-5xl font-semibold lg:text-7xl">Ploo Jompong</h2>

          {/*  TypeAnimation */}
          <TypeAnimation
            sequence={[
              'I am a Frontend Developer',
              1000,
              'I make website go brrrrr',
              2000,
            ]}
            wrapper="h3"
            speed={50}
            cursor={true}
            repeat={Infinity}
            className="mb-8 text-xl lg:text-6xl "
          />

          <p className="mb-6 text-balance text-lg lg:text-xl">
            I am a Frontend Developer student from Uppsala. I have a passion for
            programming and love learning new technologies. My goal is to become
            a Fullstack Developer. With determination and dedication, I am
            committed to mastering both frontend and backend development to
            create innovative solutions.
          </p>
          <div className="flex items-center justify-center gap-6">
            <Link to="/projects">
              <Button size={'w-auto'}>My projects</Button>
            </Link>
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
        </section>
      </MainContainer>
      <Footer />
    </>
  );
};

export default AboutPage;
