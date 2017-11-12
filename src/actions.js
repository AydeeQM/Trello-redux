import store from './store';

export const addComment = (name) => {
    let oldList = store.getState().board;
    const change = store.getState().showReply;
    const newState = !change;
    const newList = oldList.concat({
        id: oldList.length,
        name: name,
        lists:[],
    });
    store.setState({
        board: newList,
        showReply: newState
    });

    console.log(newList);
};

export const setView = (index) => {
    store.setState({
        selectedBoard: index
    })
}

export const handleLoginClick = () => {
    const change = store.getState().showReply;
    const newState = !change;
    console.log('Entre login!!!', newState);
    store.setState({ showReply: newState});
}

export const handleLogoutClick = () =>  {
    const change = store.getState().showReply;
    console.log(store.getState().showReply)
    let bolean = store.getState().showReply ? false : true;
    const newState = change;
    store.setState({ showReply: bolean });
}

/* Lista de board */
export const addList = (selected, name) => {
    let oldList = [...store.getState().board];
    const change = store.getState().toggle;
    const newState = !change;
    oldList[selected].lists.push({
        name: name,
        commit: [],
    });
    console.log('entres nueva lista');
    store.setState({
        board: oldList,
        toggle: newState,
    });

};

export const handleHideClick = () => {
    const change = store.getState().toggle;
    const newState = !change;
    console.log('Entre login!!!', newState);
    store.setState({ toggle: newState });
}

export const handleShowClick = () => {
    const change = store.getState().toggle;
    const newState = change;
    let bolean = store.getState().toggle ? false : true;
    console.log('Ente logout!!!', newState);
    store.setState({ toggle: bolean});
}

/* add works Comments */
export const addTodo = (selected, index, todocoment) => {
    let oldList = [...store.getState().board];
    const change = store.getState().todostado;
    const newState = !change;
    oldList[selected].lists[index].commit.push(todocoment);
    console.log('nuevo comentario...')
    store.setState({
        board: oldList,
        todostado: newState
    });
};

export const TodoHideClick = (index) => {
    const change = store.getState().todostado;
    const newState = !change;
    console.log('Entre login!!!', newState);
    store.setState({ todostado: newState });
}

export const TodoShowClick = (index) => {
    const change = store.getState().todostado;
    let bolean = store.getState().todostado ? false : true;
    const newState = change;
    console.log('Ente logout!!!', newState);
    store.setState({ todostado: bolean });
}