import Link from "next/link";

async function fetchRepoContents(name) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch(
    `${process.env.REPO_DIR_URL}/${name}/contents`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const contents = await response.json();
  return contents;
}

async function RepoDir({ name }) {
  const contents = await fetchRepoContents(name);
  const dirs = contents.filter((content) => content.type === "dir");

  return (
    <>
      <h3>Directories</h3>
      {dirs?.length > 0 ? (
        <ul>
          {dirs.map((dir) => (
            <li key={dir.path}>
              <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <h4>There is no directories</h4>
      )}
    </>
  );
}

export default RepoDir;
