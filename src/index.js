import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Signup from './Signup';
import Boards from './Boards';
import DetaBoards from './Detailsboard';
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
                <Route path="/boards" component={Boards} />
                <Route path="/details" component={DetaBoards} />
            </Switch>
        </HashRouter>
    </Provider>
)

ReactDOM.render(<Index />, document.getElementById('main_container'));
registerServiceWorker();
