import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

export default class App extends component{
    renderHeader() {
        return (
            <ul>
                <li>
                    <Link to="/">HOme</Link>
                </li>
                <li>
                    <Link to="/post">Post</Link>
                </li>
                <li>
                    {this.renderButton()}
                </li>
            </ul>
        )
    }
    render(){
        return (
            <div>
                <Route path="/post" component={ CommentBox } />
                <Route path="/" exact component={ CommentList } />
            </div>
        );
    }
};