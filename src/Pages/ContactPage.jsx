import { Form } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import MainContainer from '../components/MainContainer.jsx';

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <MainContainer>
        <h1 className="text-3xl text-center">Contact Me</h1>
        <Form></Form>
      </MainContainer>
    </>
  );
};

export default ContactPage;
