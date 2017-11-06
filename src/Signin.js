import React, { Component } from 'react';
import logo from './images/logo.png'
import { NavLink } from 'react-router-dom';
import './App.css';

const Init_page = () => {
    return (
        <div className='view-container sessions new'> 
            <main>
                <header>
                    <div className='logo'></div>
                </header>
                <form id='sign_in_form'>
                    <div className='field'>
                        <input type="email" id='user_email' placeholder="Email" required />
                    </div>
                    <div className='field'>
                        <input type="password" id='user_password' placeholder="Password"  required />
                    </div>
                    <button type='submit'>Sign in</button>
                    <div className='second_view'>
                        <NavLink to={"/signup"}>Create new account</NavLink>
                    </div>
                </form>
            </main> 
        </div>
    )
}

const Home = ({ mydata }) => {
    return (
        <div>
            <Init_page />
        </div>)
}

export default Home;