import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, FOLLOW, UNFOLLOW } from './types';
import axios from 'axios';

export const LoginStart = userCredentials => ({
    type: LOGIN_START,
});

export const LoginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user,
});
  
export const LoginFailure = () => ({
    type: LOGIN_FAILURE,
});
  
export const Follow = (userId) => ({
    type: FOLLOW,
    payload: userId,
});

export const Unfollow = (userId) => ({
    type: UNFOLLOW,
    payload: userId,
});


export const loginCall = (userCredentials) => async dispatch => {
    dispatch({ 
        type: LOGIN_START 
        
    });
    try {
        const res = await axios.post("http://localhost:8800/api/auth/login", userCredentials);

        dispatch({ 
            type: LOGIN_SUCCESS, 
            payload: res.data 
        });
    } catch (err) {
        dispatch({ 
            type: LOGIN_FAILURE, 
            payload: err });
    }
    }