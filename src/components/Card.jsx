import { useSelector } from 'react-redux';
import Button from './Button';

// Fixed titles to match the order of repoNamesToDisplay in the ProjectsPage
const renameTitle = [
  'Javascript Projects',
  'Resume in React',
  'Frontend Mentor Challenges',
  'Solaris',
  'Chess Timer',
  'Weather App',
];

const Card = ({ repos }) => {
  //  Get theme from store.js
  const theme = useSelector((state) => state.theme.theme);

  return (
    <section className="flex flex-wrap items-start justify-around gap-5">
      {/* Loop through repos from ProjectsPage and display them */}
      {repos.map((repo, index) => (
        <div
          key={repo.id}
          className={`${theme} ${theme ? 'bg-light-navy text-light-slate' : 'bg-white'} card w-96 shadow-xl`}
        >
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            {/* Rename title of repo */}
            <h2 className="card-title">{renameTitle[index]}</h2>
            <p>{repo.description}</p>
            <Button>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                CODE
              </a>
            </Button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Card;
