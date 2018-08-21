import { compineReducer, combineReducers } from 'redux';
import commentsReducer from 'reducers/comments';

export default combineReducers ({
    comments: commentsReducer
});