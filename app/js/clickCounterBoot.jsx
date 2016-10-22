
require('../sass/click-counter.sass');

import ready from './JQFn.js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/clickCounterApp.jsx';

ready(function () {
    React.render(<App initialCount="0"/> ,
        document.getElementById('container')
    );
});
//React.createElement(App, null),
