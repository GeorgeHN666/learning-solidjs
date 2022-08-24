/* @refresh reload */
import { render } from 'solid-js/web';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import { Router } from 'solid-app-router'

// CSS
import './index.css';

render(() => (
<Router>
    <App />
</Router>), 
document.getElementById('root') as HTMLElement);
