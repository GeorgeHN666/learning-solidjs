import { For } from 'solid-js'
import {repos,setUserName,userName} from '../App'
import RepoCard,{ Repo } from '../components/RepoCard'

export default function Home() {

    console.log(repos())

    const onSubmit = (event: Event) => {
        event.preventDefault()
        const UserNameInput = document.querySelector('#usernameInput') as HTMLInputElement
        setUserName(UserNameInput.value)
    
       
    }

    return(
        <div>
            <form class="mb-3" onSubmit={(event) => onSubmit(event)}>
                <input type="text" class="p-1 align-middle" id="usernameInput" required />
                <button class="btn btn-dark ms-3 w-auto" >Fetch</button>
            </form>
            <h3>Github Repos for {userName()}</h3>

            <For each={repos()}>{(repo : Repo) => <RepoCard repo={repo} />}</For>

        </div>
    );
} 