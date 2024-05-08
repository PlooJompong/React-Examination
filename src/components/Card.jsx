import Button from './Button';

// Fixed the title to match the order of repoNamesToDisplay in the ProjectsPage
const renameTitle = [
  'Javascript Projects',
  'Resume in React',
  'Frontend Mentor Challenges',
  'Solaris Javascript',
  'ChessTimer',
  'WeatherApp',
];

const Card = ({ repos }) => {
  return (
    <section className="flex flex-wrap items-start justify-around  gap-5">
      {repos.map((repo) => (
        <div key={repo.id} className="card w-96 bg-white shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            {/* Rename title of repo */}
            <h2 className="card-title">{renameTitle[repos.indexOf(repo)]}</h2>
            <p>{repo.description}</p>
            <Button size={'w-20'}>
              <a href={repo.html_url} target="_blank">
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
