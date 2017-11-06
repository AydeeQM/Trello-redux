import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';
import './App.css';

const Second_view = () => {
    return (
        <div className="view-container registrations new" data-reactid=".0.0">
            <main>
                <header> 
                    <div className="logo"></div>
                    </header>
                    <form id="sign_up_form">
                        <div className="field">
                            <input id="user_first_name" type="text" placeholder="First name" required="" />
                        </div>
                        <div className="field">
                            <input id="user_last_name" type="text" placeholder="Last name" required=""  />
                        </div>
                        <div className="field">
                            <input id="user_email" type="email" placeholder="Email" required="" />
                        </div>
                        <div className="field">
                            <input id="user_password" type="password" placeholder="Password" required="" />
                        </div>
                        <div className="field">
                            <input id="user_password_confirmation" type="password" placeholder="Confirm password" required="" />
                        </div>
                        <button type="submit">Sign up</button>
                    </form>
                    <div className='second_view'>
                        <NavLink to={"/signin"}>Sign in</NavLink>
                    </div>
            </main>
        </div>
    )
}

const Signup = () => {
    return (
        <div id='main_container'>
            <div>
                <Second_view />
            </div>
            <Footer/>
        </div>
        
        )
}

export default Signup;