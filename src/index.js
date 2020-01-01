import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {

    ReactDOM.hydrate(

        <BrowserRouter>
            <App />
        </BrowserRouter>, 
        document.getElementById('root')
    )

} else {

    ReactDOM.render(

        <BrowserRouter>
            <App />
        </BrowserRouter>, 
        document.getElementById('root')
    )

}

serviceWorker.unregister();
