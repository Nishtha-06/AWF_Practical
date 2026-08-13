function RepoList(props) {
    return (
        <div>
            <h2>Github Repo</h2>

            <ul>
                {props.data.map((repo) => (
                    // goes through every repository returned by the GitHub API.
                    <li key={repo.id}>
                        <h3>{repo.name}</h3>
                        <a href = {repo.html_url} target="_blank">
                            {repo.html_url}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RepoList;