import { GET_POST, DELETE_POST, ADD_POST, UPDATE_POST } from '../actions/types';


const postReducer = (state , action)=> {
    if(state == null){
        state = {
            posts: [],
            post: {},
        }
    }
    switch(action.type) {
        case GET_POST:
            return{
                ...state,
                posts: action.payload
            };

        case DELETE_POST:
        return {
            ...state,
            posts: state.posts.filter(post => post._id !== action.payload)
        };
        case ADD_POST:
        return {
            ...state,
            posts: [action.payload, ...state.posts]
        };
        case UPDATE_POST:
            return{
                ...state,
                posts: state.posts.map(post => post._id === action.payload.id ? (post = action.payload) : post)
                }
        default: 
         return state;
    }
}
export default postReducer;