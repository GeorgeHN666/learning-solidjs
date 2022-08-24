import { Route,Routes } from 'solid-app-router'
import { createEffect, createSignal } from 'solid-js'

// COMPONENT
import Nav from './components/Nav'
import Home from './pages/Home'
import SavedRepos from './pages/SavedRepos'


const [userName,setUserName] = createSignal<string>('GeorgeHN666')
const [repos,setRepos] = createSignal<any>([])
createEffect(async ()  => {
  const res = await fetch(`http://api.github.com/users/${userName()}/repos?sort=created`)
  let data = await res.json()
  setRepos(data)
  
})

export default function App()  {



  return(
    <div class="container" >
      <Nav/>
      <Routes>
        <Route  path="/" component={Home} />
        <Route path="/repos" component={SavedRepos} />
      </Routes>
    </div>
  );
}

export {userName,setUserName,repos}