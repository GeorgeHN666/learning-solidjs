import { NavLink } from "solid-app-router";
import { savedRepos } from '../pages/SavedRepos'

export default function Nav() {


    return(
        <nav class="mt-5 mb-3 " >
            <NavLink href="/" class="btn btn-primary me-2" end activeClass="btn-warning" >Home</NavLink>
            <NavLink href="/repos" class="btn btn-primary me-2" activeClass="btn-warning" >
                {savedRepos().length < 1 ? (
                    <h6>Saved Repos</h6>
                    ) : (
                        <h6>Saved Repos-{savedRepos().length}</h6>
                        
                )}
            </NavLink>
        </nav>
    );
}