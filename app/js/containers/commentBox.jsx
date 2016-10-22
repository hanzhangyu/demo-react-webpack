/**
 * Created by Paul on 2016/10/23.
 */
import React from 'react';
import CommentList from './commentList.jsx';
import CommentForm from './commentForm.jsx';
import Comment from './comment.jsx';
import $ from './jquery.min.js';

export default class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
        this.loadCommentsFromServer=this.loadCommentsFromServer.bind(this);
        this.handleCommentSubmit=this.handleCommentSubmit.bind(this);
        this.componentDidMount=this.componentDidMount.bind(this);
    }

    loadCommentsFromServer() {
        fetch(this.props.url).then(response => response.json())
            .then(data => this.setState({data: data}))
            .catch(err => {
                console.error(this.props.url, status, err.toString());
            })
    }

    handleCommentSubmit(comment) {
        var comments = this.state.data;
        comment.id = Date.now();
        var newComments = comments.concat([comment]);
        this.setState({data: newComments});
        fetch(this.props.url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `author=${comment.author}&text=${comment.text}`
        }).then(response => response.json())
            .then(data => this.setState({data: data}))
            .catch(err => {
                this.setState({data: comments});
                console.error(this.props.url, status, err.toString());
            })
    }
    //不设置headers会以字符串形式传值，没找到官方的解释啊，百度我都不会啦，听信别人的遥远，谁说一样的，艹，get到是可以不设置,POST怎么可能
    componentDidMount() {
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    }

    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data}/>
                <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
            </div>
        );
    }
}

//this的坑，fetch的坑
