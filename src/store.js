import createStore from 'redux-zero';
import { board, tboard, listdetails, todos } from './Databoards'

const initialState = {
    board: board,
    tboard: tboard,
    details: listdetails,
    todo: todos,
    showReply: false,
    toggle: false,
    todostado: false
};

const store = createStore(initialState);
export default store;