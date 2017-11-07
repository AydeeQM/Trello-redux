import createStore from 'redux-zero';
import { board, tboard } from './Databoards'

const initialState = {
    board: board,
    tboard: tboard,
    showReply: false
};

const store = createStore(initialState);
export default store;