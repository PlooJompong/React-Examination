import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import Navbar from '../components/Navbar.jsx';
import MainContainer from '../components/MainContainer.jsx';
import Footer from '../components/Footer.jsx';

const AboutMePage = () => {
  return (
    <>
      <Navbar />
      <MainContainer>
        <section className="hero-content mb-60 flex-col items-start gap-6">
          <h1 className="mb-8 font-fira text-lg 2xl:text-xl ">
            Hi, my name is{' '}
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
            className="mb-8 text-4xl lg:text-6xl "
          />

          <p className="mb-6 text-balance text-lg lg:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nam
            aut eligendi rerum aperiam vel unde odio tempore consectetur alias
            numquam molestias excepturi labore ea nemo et dignissimos, quasi
            animi?
          </p>
          <Link to="/projects">
            <button className="btn btn-primary w-40 text-lg text-white">
              My projects
            </button>
          </Link>
        </section>
      </MainContainer>
      <Footer />
    </>
  );
};

export default AboutMePage;
