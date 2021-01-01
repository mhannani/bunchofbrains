import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import  'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import 'font-awesome/css/font-awesome.min.css';
import App from './App';
import './Sass/App.scss';
import Firebase, {FirebaseContext} from "./Firebase/index";
import store from './store';

setTimeout(
    () =>
        ReactDOM.render(
            <Provider store={store}>
                <FirebaseContext.Provider value={new Firebase()}>
                    <App />
                </FirebaseContext.Provider>
            </Provider>,
            document.getElementById('root')),
    2000
);

serviceWorker.unregister();