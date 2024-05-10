import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import MainContainer from '../components/MainContainer';
import Footer from '../components/Footer';
import Button from '../components/Button';

const NotFoundPage = () => {
  return (
    <>
      <Navbar />
      <MainContainer>
        <h2 className="-translate-y-20 text-7xl font-semibold text-bright-purple dark:text-bright-green lg:text-9xl">
          404
        </h2>
        <h2 className="my-20 -translate-y-20 text-balance text-center font-fira text-3xl lg:text-5xl">
          I don&apos;t know how you ended upp here, but you should go away now
        </h2>
        <Link to="/">
          <Button size={'w-auto'}>Back to About</Button>
        </Link>
      </MainContainer>
      <Footer />
    </>
  );
};

export default NotFoundPage;
