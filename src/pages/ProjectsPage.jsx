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
        })
        .catch((error) => {
          console.log('Error fetching repos', error);
        });
    }
  }, []);

  return (
    <>
      <ScrollToTop /> {/* Scroll to top on route change */}
      <Navbar />
      <MainContainer>
        <h1 className="mb-6 mt-2 text-center text-4xl font-semibold">
          My Projects
        </h1>
        <Card repos={repos} />
      </MainContainer>
      <Footer />
    </>
  );
};

export default ProjectsPage;
