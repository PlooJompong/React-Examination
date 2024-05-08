import { Form } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop.jsx';
import Navbar from '../components/Navbar.jsx';
import MainContainer from '../components/MainContainer.jsx';
import Footer from '../components/Footer.jsx';

const ContactPage = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <MainContainer>
        <h1 className="text-center text-3xl">Contact Me</h1>
        <Form></Form>
      </MainContainer>
      <Footer />
    </>
  );
};

export default ContactPage;
