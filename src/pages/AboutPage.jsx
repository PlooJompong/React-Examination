import ScrollToTop from '../components/ScrollToTop.jsx';
import Navbar from '../components/Navbar.jsx';
import MainContainer from '../components/MainContainer.jsx';
import Footer from '../components/Footer.jsx';
import About from '../components/About.jsx';

const AboutPage = () => {
  return (
    <>
      <ScrollToTop /> {/* Scroll to top on route change */}
      <Navbar />
      <MainContainer>
        <About />
      </MainContainer>
      <Footer />
    </>
  );
};

export default AboutPage;
