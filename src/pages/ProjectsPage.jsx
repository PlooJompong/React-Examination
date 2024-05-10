import { useEffect, useState } from 'react';
import axios from 'axios';
import ScrollToTop from '../components/ScrollToTop.jsx';
import Navbar from '../components/Navbar.jsx';
import MainContainer from '../components/MainContainer.jsx';
import Footer from '../components/Footer.jsx';
import Card from '../components/Card.jsx';

// Array of Repos that I want to display
const repoNamesToDisplay = [
  'Javascript-projects',
  'React-Examination',
  'Frontend-Mentor-Challenges',
  'Solaris-Examination-Ploo-Jompong',
  'ChessTimer',
  'WeatherApp',
];

const ProjectsPage = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /**
   * useEffect hook to fetch data from GitHub API and store in local storage
   * Only run when component mounts (first render)
   */
  useEffect(() => {
    // Check if repos are exist in local storage
    if (localStorage.getItem('repos')) {
      const localData = JSON.parse(localStorage.getItem('repos'));

      // Filter repos to display based on repoNamesToDisplay
      const filteredRepos = localData.filter((repo) =>
        repoNamesToDisplay.includes(repo.name),
      );

      // Sort repos based on repoNamesToDisplay order
      const sortedRepos = repoNamesToDisplay
        .map((repoName) => filteredRepos.find((repo) => repo.name === repoName))
        .filter((repo) => repo);

      // Set repos to sortedRepos to display
      setRepos(sortedRepos);
      setLoading(false);
    } else {
      /**
       * If repos not exist in local storage, fetch data from GitHub API
       * using axios and store in local storage
       */
      axios
        .get('https://api.github.com/users/PlooJompong/repos')
        .then((res) => {
          const data = res.data;
          localStorage.setItem('repos', JSON.stringify(data));

          // Filter repos to display based on repoNamesToDisplay
          const filteredRepos = data.filter((repo) =>
            repoNamesToDisplay.includes(repo.name),
          );

          // Sort repos based on repoNamesToDisplay order
          const sortedRepos = repoNamesToDisplay
            .map((repoName) =>
              filteredRepos.find((repo) => repo.name === repoName),
            )
            .filter((repo) => repo);

          // Set repos to sortedRepos to display
          setRepos(sortedRepos);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }
  }, []);

  return (
    <>
      {/* Scroll to top on route change */}
      <ScrollToTop />
      <Navbar />
      <MainContainer>
        {/* Display h1 if fetch success or null if error  */}
        {loading ? null : (
          <h1 className="mb-6 mt-2 text-center text-4xl font-semibold">
            My Projects
          </h1>
        )}
        {/**
         * Display loading spinner while fetching data or
         * display error message if fetch error or
         * display <Card /> if fetch success
         * */}
        {loading ? (
          <span className="loading loading-spinner loading-lg"></span>
        ) : error ? (
          <h2 className="mb-40 text-4xl text-bright-purple dark:text-bright-green lg:text-6xl">
            {error.message}
          </h2>
        ) : (
          <Card repos={repos} />
        )}
      </MainContainer>
      <Footer />
    </>
  );
};

export default ProjectsPage;
