/* @refresh reload */
import { render } from 'solid-js/web';
import { Router } from "@solidjs/router";
import '../css/index.css';
import 'animate.css';
import App from './App';

render(() => (<Router>

    <App />


</Router>), document.getElementById('root'));
