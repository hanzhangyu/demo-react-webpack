/**
 * Created by Paul on 2016/10/23.
 */
import React from 'react';
import Comment from './comment.jsx';

export default class CommentList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var commentNodes = this.props.data.map(function (comment) {
            return (
                <Comment author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment>
            );
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
}
