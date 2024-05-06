const Card = ({ repos }) => {
  return (
    <section className="flex justify-around items-start flex-wrap gap-5">
      {repos.map((repo) => (
        <div
          key={repo.id}
          className="w-1/4 min-h-80 flex flex-col  justify-center items-center rounded-lg border-2 bg-white"
        >
          {/* TODO: Adjust card img width */}
          <div className="w-96 h-52 mt-4 bg-slate-500 md:w-32 lg:w-80"></div>
          <h2 className="m-4 text-xl">{repo.name}</h2>
          <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-4 rounded">
            <a href={repo.html_url} target="_blank">
              Link
            </a>
          </button>
        </div>
      ))}
    </section>
  );
};

export default Card;
