import { GET_POSTS, DELETE_POST, ADD_POST, GET_POST, UPDATE_POST } from './types';
import axios from 'axios';

export const getPosts = (id) => async dispatch => {
    const res = await axios.get(`http://localhost:8800/api/post/${id}`);

    dispatch ({
        type: GET_POSTS,
        payload: res.data
    });
};

export const getPost = (username) => async dispatch => {
    const res = await axios.get(`http://localhost:8800/api//profile/${username}`);

    dispatch ({
        type: GET_POST,
        payload: res.data
    });
};

export const deletePost = id => async dispatch => {
    try{
        await axios.delete(`http://localhost:8800/api/post/${id}`);
        dispatch ({
            type: DELETE_POST,
            payload: id
        });
    } catch(e){
        dispatch ({
            type: DELETE_POST,
            payload: id
        }); 
    }
    await axios.delete(`http://localhost:8800/api/post/${id}`);
    dispatch ({
        type: DELETE_POST,
        payload: id
    });
};

export const addPost = post => async dispatch => {
    const res = await axios.post('http://localhost:8800/api/post/', post);
    dispatch ({
        type: ADD_POST,
        payload: res.data
    });
};

export const updatePost = post => async dispatch => {
    const res = await axios.put(`http://localhost:8800/api/post/${post.id}`, post);
    dispatch ({
        type: UPDATE_POST,
        payload: res.data
    });
}; 