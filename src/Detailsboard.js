import React, { Component } from 'react';
import { connect } from 'redux-zero/react';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import { addList, handleShowClick, handleHideClick, addTodo, TodoHideClick, TodoShowClick } from './actions';

const TodoHide = ({todostado }) => {
    return (
        !todostado && <a class="add-new" onClick={() => TodoHideClick()} > Add a new card...</a>
    )
}

const TodoShow= ({todostado}) => {
    const onSubmit = e => {
        e.preventDefault();
        if (this.refInput.value) {
            addTodo(this.refInput.value);
            this.refInput.value = '';
        }

    };
    return (
        todostado && <div className="list form">
            <div className='inner'>
                <h4>New board</h4>
                <div class="card form">
                    <form onSubmit={onSubmit} id="new_card_form">
                        <textarea id="card_name" type="text" required="" rows="5" ref={e => (this.refInput = e)}></textarea>
                        <button type="submit">Add</button><span> or </span><a onClick={() => TodoShowClick()}>cancel</a>
                    </form>
                </div>
            </div>
        </div>
    )

}

const User = ({ title, todo, todostado }) => {
    return (
        <div className="list">
            <div className="inner">
                <header><h4>{title}</h4></header>
                <div class="cards-wrapper">
                    <div id="card_348" class="card"  draggable="true">
                        <div class="card-content">
                            <div class="tags-wrapper" ></div>
                            {
                                todo.map((list, index) => {
                                    return (
                                        <span key={index}>{list.todocoment}</span>
                                    );
                                })
                            }
                            <footer>
                                <small>
                                    <i class="fa fa-comment-o"></i><span></span><span>1</span>
                                </small>
                                <img alt="Gravatar for john@phoenix-trello.com" src="//www.gravatar.com/avatar/6a88cfcf7b76267b129b8dc477c4105e?d=retro&amp;r=g&amp;s=50" srcset="//www.gravatar.com/avatar/6a88cfcf7b76267b129b8dc477c4105e?d=retro&amp;r=g&amp;s=100 2x" height="50" width="50" class="react-gravatar react-gravatar"/>
                            </footer>
                        </div>
                    </div>
                    <div id="card_349" class="card" draggable="true">
                        <div class="card-content"><div class="tags-wrapper"></div><span>jkb,mnnbm,</span>
                    <footer></footer>
                    </div>
                    </div>
                </div>
                <footer>
                    <TodoHide todostado={todostado} />
                    <TodoShow todostado={todostado} /> 
                </footer>
            </div>
        </div>
    );
}

const LogoutButton = ({ toggle }) => {
    return (
        !toggle && <div class="list add-new"><div class="inner" onClick={() => handleHideClick()}>Add new list...</div></div>
    )
}

const LoginButton = ({ toggle }) => {
    const onSubmit = e => {
        e.preventDefault();
        if (this.refInput.value) {
            addList(this.refInput.value);
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

const DetaBoards = ({details, toggle, todo, todostado}) => {

    const boardComponent = details.map((item, index) => {
        return <User
            key={index}
            title={item.title}
            index={index}
            todo={todo}
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
                                    <h3>Tes Board</h3>
                                </header>
                                <div className="canvas-wrapper">
                                    <div className="canvas">
                                        <div className="lists-wrapper">
                                            {boardComponent}
                                            <LogoutButton toggle={toggle} />
                                            <LoginButton toggle={toggle} /> 
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

const mapToProps = ({details, toggle, todo, todostado}) => ({details, todo, toggle, todostado});
export default connect(mapToProps)(DetaBoards);