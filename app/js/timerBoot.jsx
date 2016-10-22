
import ready from './JQFn.js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/timerApp.jsx';

ready(function () {
    var ExampleApplicationFactory = React.createFactory(App);
    var start = new Date().getTime();
    setInterval(function () {
        React.render(
            ExampleApplicationFactory({elapsed: new Date().getTime() - start}),
            document.getElementById('container')
        );
    }, 50);
});
//React.createElement(App, null),
