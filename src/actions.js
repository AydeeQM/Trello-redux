import store from './store';

export const addComment = (name) => {
    let oldList = store.getState().board;
    const change = store.getState().showReply;
    const newState = !change;
    const newList = oldList.concat({
        id: oldList.length,
        name: name,
    });
    store.setState({
        board: newList,
        showReply: newState
    });

    console.log(newList);
};

export const removeComment = (index) => {
    const newforoList = store.getState().board.filter((item, idx) => idx !== index);
    store.setState({
        board: newforoList
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
    console.log('Ente logout!!!', bolean);
    store.setState({ showReply: bolean });
}

/* Lista de board */
export const addList = (title) => {
    let oldList = store.getState().details;
    const change = store.getState().toggle;
    const newState = !change;
    const newList = oldList.concat({
        id: oldList.length,
        title: title,
    });
    store.setState({
        details: newList,
        toggle: newList,
    });

    console.log(newList);
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

/* add works  */
export const addTodo = (todocoment) => {
    let oldList = store.getState().todo;
    const change = store.getState().todostado;
    const newState = !change;
    const newList = oldList.concat({
        todocoment: todocoment,
    });
    store.setState({
        todo: newList,
        todostado: newState
    });

    console.log(newList);
};

export const TodoHideClick = () => {
    const change = store.getState().todostado;
    const newState = !change;
    console.log('Entre login!!!', newState);
    store.setState({ todostado: newState });
}

export const TodoShowClick = () => {
    const change = store.getState().todostado;
    let bolean = store.getState().todostado ? false : true;
    const newState = change;
    console.log('Ente logout!!!', newState);
    store.setState({ todostado: bolean });
}