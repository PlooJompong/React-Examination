import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFoundPage = () => {
  return (
    <>
      <Navbar />
      <h1>NotFoundPage</h1>
      <Link to="/">
        <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          Back to About me
        </button>
      </Link>
      <Footer />
    </>
  );
};

export default NotFoundPage;
