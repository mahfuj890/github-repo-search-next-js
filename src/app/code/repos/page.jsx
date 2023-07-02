import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

const getRepos = async () => {
  const fetchRepos = await fetch(
    "https://api.github.com/users/mahfuj890/repos",
    {
      next: {
        revalidate: 60,
      },
    }
  );
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetchRepos.json();
  return response;
};

async function ReposPage() {
  const repos = await getRepos();

  return (
    <div className="repos-container">
      <h2>Repositories</h2>
      <ul className="repo-list">
        {repos.map((repo) => (
          <li key={repo.id}>
            <Link href={`/code/repos/${repo.name}`}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div className="repo-details">
                <span>
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span>
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span>
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReposPage;
