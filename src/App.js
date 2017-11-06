import React, { Component } from 'react';
import Signin from './Signin'
import { connect } from 'redux-zero/react';

const App = () => {
  return (
    <div id='main_container'>
        <Signin />
    </div>
  )
}

const mapToProps = ({ mydata }) => ({ mydata });
export default connect(mapToProps)(App);
