/* @refresh reload */
import { render } from 'solid-js/web';
import { Router } from "@solidjs/router";
import '/src/css/index.css';
import App from './App';
import { TransProvider, Trans } from '@mbarzda/solid-i18next';

render(() => (<Router>
    <TransProvider>
        <App />
    </TransProvider>

</Router>), document.getElementById('root'));
