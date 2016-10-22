require('../sass/comment.sass');

import ready from './JQFn.js';
import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './containers/CommentBox.jsx';

ready(function () {
    React.render(
        <CommentBox url="/api/comments" pollInterval={2000} />,
        document.getElementById('content')
    );
});
//React.createElement(App, null),
