import React, { Component } from 'react';
import { connect } from "react-redux";

export default (ChildComponent) => {
    class ComposedComponent extends Component{        

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

    render(){
            return <ChildComponent />;
        };
    }

    function mapStateToProps(state) {
        return { auth: state.auth };
    }
    
    return connect(mapStateToProps)(ComposedComponent);
};