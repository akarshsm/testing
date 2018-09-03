import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from 'actions';

class CommentBox extends Component {
    state = { 
        comment: ''
    };

    //component just got rendered
    componentDidMount () {
        this.isLoggedIn();
    }
    

    componentDidUpdate(){
        this.isLoggedIn();
    }

    isLoggedIn(){
        if (!this.props.auth) {
            console.log("Logged out");
            this.props.history.push('/');
        }
    }


    handleChange = (event) => {
        this.setState({comment : event.target.value});
    }
    handleSubmit = event => {
        event.preventDefault();
        // TODO - call an action creator
        // And saveComment from Actions
        this.props.saveComment(this.state.comment);
        this.setState({comment: ''});

    }
    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4> Add a Comment </h4>
                    <textarea onChange={this.handleChange} value={this.state.comment} />
                    <div>
                        <button> Submit Comment </button>
                    </div>
                </form>
                <button className="fetch-comments" onClick={this.props.fetchComments}> 
                    Fetch Comments
                 </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth };
    
}
export default connect(mapStateToProps, actions)(CommentBox);