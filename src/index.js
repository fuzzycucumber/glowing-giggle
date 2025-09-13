// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
//import { browserHistory } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

//import './index.css';
//import './components/App/styles/main.css';


ReactDOM.render(
        <Routes history={BrowserRouter} />,
        document.getElementById('root')

        //disable caching read https://goo.gl/KwvDNy
        //registerServiceWorker();

        );
