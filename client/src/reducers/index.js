import { combineReducers } from "redux";
import userReducer from './userReducer.js';
//import postReducer from  './postReducer';


let rootReducer = combineReducers({

    users: userReducer,
    //posts: postReducer

});

export default rootReducer;