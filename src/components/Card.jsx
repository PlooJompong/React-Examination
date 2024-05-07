const Card = ({ repos }) => {
  return (
    <section className="flex flex-wrap items-start justify-around gap-5">
      {repos.map((repo) => (
        <div key={repo.id} className="card w-96 bg-white shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{repo.name}</h2>
            <p>{repo.description}</p>
            <a href={repo.html_url} target="_blank">
              <button className="btn btn-primary">GO TO GITHUB</button>
            </a>
            {/* <div className="card-actions justify-end">
              <div className="badge badge-secondary">NEW</div>
              <div className="badge badge-outline">Products</div>
            </div> */}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Card;
