import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Signup from './Signup';
import App from './App';
import { Provider } from 'redux-zero/react'
import store from './store'
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, Switch, Route } from 'react-router-dom'


const Index = () => (
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/signin" component={App} />
                <Route path="/signup" component={Signup} />
            </Switch>
        </HashRouter>
    </Provider>
)

ReactDOM.render(<Index />, document.getElementById('main_container'));
registerServiceWorker();
