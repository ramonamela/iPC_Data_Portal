import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
//import * as Keycloak from 'keycloak-js';


const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

// console.log("React");

ReactDOM.render(app, document.getElementById('root'));

