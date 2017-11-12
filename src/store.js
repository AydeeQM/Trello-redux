import createStore from 'redux-zero';
import { board, tboard } from './Databoards'

const initialState = {
    board: board,
    tboard: tboard,
    selectedBoard: 0,
    showReply: false,
    toggle: false,
    todostado: false
};

const store = createStore(initialState);
export default store;