import React, { Component } from 'react';
import { connect } from 'redux-zero/react';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import { addList, handleShowClick, handleHideClick, addTodo, TodoHideClick, TodoShowClick } from './actions';

/* -----------------Agregar Comentarios--------------------------- */

const TodoHide = ({todostado, index }) => {
    return (
        !todostado && <a className="add-new" onClick={() => TodoHideClick(index)} > Add a new card...</a>
    )
}

const TodoShow= ({selected, index, todostado}) => {
    const onSubmit = e => {
        e.preventDefault();
        if (this.refInput.value) {
            addTodo(selected, index, this.refInput.value);
            this.refInput.value = '';
        }

    };
    return (
        todostado && <div className="list form">
            <div className='inner'>
                <h4>New board</h4>
                <div className="card form">
                    <form onSubmit={onSubmit} id="new_card_form">
                        <textarea type="text" required="" ref={e => (this.refInput = e)}></textarea>
                        <button type="submit">Add</button><span> or </span><a onClick={() => TodoShowClick(index)}>cancel</a>
                    </form>
                </div>
            </div>
        </div>
    )

}

/* --------------------------------------------**---------------------------------------------------------------- */

const User = ({ title, board, index, selected, selectedBoard, todostado }) => {
    return (
        <div key={index} className="list">
            <div className="inner">
                <header><h4>{title}</h4></header>
                <div className="cards-wrapper">
                    {board.commit.map((comment, i) => {
                        return <div key={i}  className="card">
                            <div className="card-content">
                                <div className="tags-wrapper" >
                                    <span>{comment}</span>
                                </div>
                                <footer>
                                    <small>
                                        <i className="fa fa-comment-o"></i><span></span><span>1</span>
                                    </small>
                                    <img alt="Gravatar for john@phoenix-trello.com" src="//www.gravatar.com/avatar/6a88cfcf7b76267b129b8dc477c4105e?d=retro&amp;r=g&amp;s=50" srcset="//www.gravatar.com/avatar/6a88cfcf7b76267b129b8dc477c4105e?d=retro&amp;r=g&amp;s=100 2x" height="50" width="50" className="react-gravatar react-gravatar" />
                                </footer>
                            </div>
                        </div>
                    })}
                    <div id="card_349" className="card" draggable="true">
                    <div className="card-content"><div className="tags-wrapper"></div><span>my commit</span></div>
                    </div>
                </div>
                <footer>
                    <TodoHide todostado={todostado} />
                    <TodoShow selected={selectedBoard} index={index} todostado={todostado} /> 
                </footer>
            </div>
        </div>
    );
}

/* ***************************Agregar lista de tareas****************************** */
const LogoutButton = ({ toggle }) => {
    return (
        !toggle && <div className="list add-new"><div className="inner" onClick={() => handleHideClick()}>Add new list...</div></div>
    )
}

const LoginButton = ({ selected, toggle }) => {
    const onSubmit = e => {
        e.preventDefault();
        if (this.refInput.value) {
            addList(selected, this.refInput.value);
            this.refInput.value = '';
        }

    };
    return (
        toggle && <div className="list form">
            <div className='inner'>
                <h4>New board</h4>
                <form onSubmit={onSubmit} id='new_list_form'>
                    <div className="inner-wrap">
                        <input
                            type="text"
                            id="list_name"
                            name="name"
                            placeholder="Add a new list..." 
                            required="" 
                            ref={e => (this.refInput = e)}
                        />
                        <button type="submit">Save list</button>
                        <span> or </span>
                        <a onClick={() => handleShowClick()}>Cancel</a>
                    </div>
                </form>
            </div>
        </div>
    )

}

/* ********************************************************************************** */

const DetaBoards = ({ board, selected, selectedBoard, index, toggle, todostado}) => {

    const boardComponent = board[selectedBoard].lists.map((item, index) => {
        return <User
            key={index}
            title={item.name}
            index={index}
            board={item}
            selected={selectedBoard}
            todostado={todostado}
            
        />
    })

    return (
        <div id='main_container'>
            <div>
                <div id='authentication_container' className='application-container'>
                    <Header />
                    <div className='main-container'>
                        <div className="view-container boards show">
                                <header className="view-header" >
                                <h3>{board[selectedBoard].name}</h3>
                                </header>
                                <div className="canvas-wrapper">
                                    <div className="canvas">
                                        <div className="lists-wrapper">
                                            {boardComponent}
                                            <LogoutButton toggle={toggle} />
                                            <LoginButton selected={selectedBoard} toggle={toggle} /> 
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

const mapToProps = ({ board, selected, selectedBoard, index, toggle, todostado }) => ({ board, selected, selectedBoard, index, toggle, todostado});
export default connect(mapToProps)(DetaBoards);