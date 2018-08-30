import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main_page/app';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
