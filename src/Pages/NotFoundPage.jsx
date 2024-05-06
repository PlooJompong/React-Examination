import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <h1>NotFoundPage</h1>
      <Link to="/">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Back to About me
        </button>
      </Link>
    </>
  );
};

export default NotFoundPage;
