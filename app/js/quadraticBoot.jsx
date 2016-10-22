
import ready from './JQFn.js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/quadraticApp.jsx';

ready(function () {
    React.render(
        <App />,
        document.getElementById('container')
    )
});
//React.createElement(App, null),
