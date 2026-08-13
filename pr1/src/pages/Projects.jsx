

import { useEffect, useState } from "react";
import Spinner from "../components/Spinner"
import ErrorMessage from "../components/ErrorMessage";
import RepoList from "../components/RepoList";

function Projects() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // return (
    //     <div>
    //         <h2>Projects</h2>

    //         <button onClick={() => setShowProjects(!showProjects)}>
    //             {/* //!showProjects is false then make true,if true then false */}
    //             {showProjects ? "Hide projects":"Show projects"}
    //             {showProjects ? "Hide Projects" : "Show Projects"}
    //         </button>

    //         {showProjects && (
    //             <ul>
    //                 <li>Customer Churn Prediction</li>
    //                 <li>AI Interview Trainer</li>
    //             </ul>
    //         )}
    //     </div>
    // );


    //Runs only once when the component is mounted.
    useEffect(() => {
        fetch("https://api.github.com/users/octocat/repos") //This sends an HTTP GET request to the GitHub API.
            .then((response) => response.json()) //response.json() converts it into a JavaScript object
            .then((result) => { //result contains all repositories.
                setData(result);
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });

    }, []);

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <ErrorMessage />;
    }

    return (
        <div>
            <RepoList data={data} />
        </div>
    );
}

export default Projects;