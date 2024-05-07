const Card = ({ repos }) => {
  return (
    <section className="flex flex-wrap items-start justify-around gap-5">
      {repos.map((repo) => (
        <div
          key={repo.id}
          className="flex min-h-80 w-1/4 flex-col  items-center justify-center rounded-lg border-2 bg-white"
        >
          {/* TODO: Adjust card img width */}
          <div className="mt-4 h-52 w-96 bg-slate-500 md:w-32 lg:w-80"></div>
          <h2 className="m-4 text-xl">{repo.name}</h2>
          <button className="mb-4 rounded bg-blue-400 px-4 py-2 font-bold text-white hover:bg-blue-700">
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
