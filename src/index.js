import React from 'react';
import ReactDOM from 'react-dom';
import  'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import * as serviceWorker from './serviceWorker';
import 'font-awesome/css/font-awesome.min.css';
import App from './App';
import './Sass/App.scss';
import Firebase, {FirebaseContext} from "./Firebase/index";


setTimeout(
    () =>
        // the show/hide functions are passed as props
        ReactDOM.render(

                <FirebaseContext.Provider value={new Firebase()}>
                    <App />
                </FirebaseContext.Provider>,
            document.getElementById('root')),
    2000
);

serviceWorker.unregister();