import { createSignal, For } from "solid-js";
import RepoCard, { Repo } from "../components/RepoCard";

const reposFromLocalSorage = JSON.parse(localStorage.getItem("saved_repos") || '[]')

const [savedRepos,setSavedRepos] = createSignal<any>(reposFromLocalSorage)

export default function SaveRepos() {
   return(
    <div >
        <h2>Your saved repos</h2>

        <For each={savedRepos()}>
            {(repo : Repo) => <RepoCard repo={repo}/>}
        </For>

    </div>
   ); 
}

export {setSavedRepos,savedRepos}