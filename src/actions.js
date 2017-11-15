import store from './store';

export const addComment = (name) => {
    let oldList = store.getState().board;
    const change = store.getState().showReply;
    const newState = !change;
    const newList = oldList.concat({
        id: oldList.length,
        name: name,
        cards:[],
        toggle: false
    });
    store.setState({
        board: newList,
        showReply: newState
    });

    console.log(newList);
};

export const setView = (index) => {
    store.setState({
        idBoard: index
    })
}

export const handleLoginClick = () => {
    const change = store.getState().showReply;
    const newState = !change;
    //console.log('Entre login!!!', newState);
    store.setState({ showReply: newState});
}

export const handleLogoutClick = () =>  {
    const change = store.getState().showReply;
    //console.log(store.getState().showReply)
    let bolean = store.getState().showReply ? false : true;
    const newState = change;
    store.setState({ showReply: bolean });
}

/********************** Lista de board *********************************/
export const addList = (selected, name) => {
    let oldList = [...store.getState().board];
    oldList[selected].toggle = false;
    oldList[selected].cards.push({
        name: name,
        commit: [],
        todostado: false
    });
    store.setState({
        board: oldList,
    });

};

export const handleHideClick = (selected) => {
    let oldList = [...store.getState().board];
    oldList[selected].toggle = true;
    store.setState({
        board: oldList
    })
}

export const handleShowClick = (selected) => {
    let oldList = [...store.getState().board];
    oldList[selected].toggle = false;
    store.setState({
        board: oldList
    })
    /* let bolean = store.getState().toggle ? false : true;
    store.setState({ toggle: bolean}); */
}

/********************* add works Comments ******************************/
export const addTodo = (selected, index, todocoment) => {
    let oldList = [...store.getState().board];
    oldList[selected].cards[index].todostado = false;
    oldList[selected].cards[index].commit.push(todocoment);
    console.log('nuevo comentario...')
    store.setState({
        board: oldList,
    });
};

export const TodoHideClick = (selected, index) => {
    let oldList = [...store.getState().board];
    oldList[selected].cards[index].todostado = true;
    store.setState({ board: oldList });
}

export const TodoShowClick = (selected, index) => {
    let oldList = [...store.getState().board];
    oldList[selected].cards[index].todostado = false;
    /* let bolean = store.getState().todostado ? false : true; */
    store.setState({ board: oldList });
}