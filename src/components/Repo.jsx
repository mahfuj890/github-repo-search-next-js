import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";
import { BsLink } from "react-icons/bs";

async function fetchRepo(name) {
  const response = await fetch(
    `https://api.github.com/repos/mahfuj890/${name}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const repo = await response.json();
  return repo;
}
async function Repo({ name }) {
  const repo = await fetchRepo(name);

  return (
    <>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <div className="card-stats">
        <div className="card-stat">
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className="card-stat">
          <FaCodeBranch />
          <span>{repo.forks_count}</span>
        </div>
        <div className="card-stat">
          <FaEye />
          <span>{repo.watchers_count}</span>
        </div>
      </div>
      <div>
        <a href={repo?.html_url} className="btn btn-back" target="_blank">
          Visit <BsLink />
        </a>
      </div>
    </>
  );
}

export default Repo;
