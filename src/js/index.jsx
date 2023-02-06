/* @refresh reload */
import { render } from 'solid-js/web';
import { Router } from "@solidjs/router";
import '../css/index.css';
import 'animate.css';
import App from './App';
import { TransProvider, Trans } from '@mbarzda/solid-i18next';

render(() => (<Router>
    <TransProvider>
        <App />
    </TransProvider>

</Router>), document.getElementById('root'));
