import store from './store';

export const addComment = (name) => {
    let oldList = store.getState().board;
    const newList = oldList.concat({
        id: oldList.length,
        name: name,
    });
    store.setState({
        board: newList
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
    const newState = change;
    console.log('Ente logout!!!', newState);
    store.setState({ showReply: newState });
}

/* Lista de board */
export const addList = (title) => {
    let oldList = store.getState().details;
    const newList = oldList.concat({
        id: oldList.length,
        title: title,
    });
    store.setState({
        details: newList
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
    console.log('Ente logout!!!', newState);
    store.setState({ toggle: newState });
}

/* add works  */
export const addTodo = (todocoment) => {
    let oldList = store.getState().todo;
    const newList = oldList.concat({
        todocoment: todocoment,
    });
    store.setState({
        todo: newList
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
    const newState = change;
    console.log('Ente logout!!!', newState);
    store.setState({ todostado: newState });
}