import ScrollToTop from '../components/ScrollToTop.jsx';
import Navbar from '../components/Navbar.jsx';
import MainContainer from '../components/MainContainer.jsx';
import Footer from '../components/Footer.jsx';
import FormInput from '../components/Form.jsx';

const ContactPage = () => {
  return (
    <>
      {/* Scroll to top on route change */}
      <ScrollToTop />
      <Navbar />
      <MainContainer>
        <h1 className="mb-6 mt-2 text-center text-4xl font-semibold">
          Contact Me
        </h1>
        <FormInput />
      </MainContainer>
      <Footer />
    </>
  );
};

export default ContactPage;
