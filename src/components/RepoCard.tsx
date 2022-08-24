import { setSavedRepos,savedRepos } from "../pages/SavedRepos"

export type Repo = {
    id : string,
    html_url : string,
    name : string,
    desc : string,
    stargazers_count : string,
    owner : {
        login : string,
    }
} 

interface Props {
    repo : Repo
}

const saveRepo = (repo:Repo) => {
    setSavedRepos([repo,...savedRepos()])
    localStorage.setItem('saved_repos',JSON.stringify(savedRepos()))
}

const unsaveRepo = (repoId : string) => {
    const nextState = savedRepos()?.filter((item:any) => item.id !== repoId)
    setSavedRepos(nextState)
    localStorage.setItem("saved_repos",JSON.stringify(savedRepos()))
}

const repoIsSaved = (repoId: string) => {
    const repo = savedRepos()?.filter((item:any) => item.id === repoId)
    return repo?.length > 0
}

export default function RepoCard({repo} : Props) {

    return(
        <div class="card">
            <div class="card-header">&#11088; stars: {repo.stargazers_count}</div>
            <div class="card">
                <a href={repo.html_url} class="h4 card-title text-decoation-none" target='_blank' rel='nonreferrer'>
                    <strong>{repo.owner?.login}/{repo.name}</strong>
                </a>                
                <p class="card-text">{repo.desc}</p>
                {repoIsSaved(repo.id) ? (
                    <button class="btn btn-danger" onClick={() => unsaveRepo(repo.id)}>Unsave</button>
                ) : (
                    <button class="btn btn-success" onClick={() => saveRepo(repo)}>Save</button>
                )}
            </div>
        </div>
    )
}