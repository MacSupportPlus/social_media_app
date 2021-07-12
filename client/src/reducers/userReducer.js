import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, FOLLOW, UNFOLLOW } from '../actions/types';

const userReducer = (state, action) => {
    
    if(state == null){
        state = {
            user: null,
            isFetching: false,
            error: false,
            email: "",
            passWord: ""
        }
    }

    switch(action.type){
        case LOGIN_START:
            return {
                user: null,
                isFetching: true,
                error: false,
                userCredentials: action.payload
        };

        
        case LOGIN_SUCCESS:
            return {
                user: action.payload,
                userErr:[]
            };
        case LOGIN_FAILURE:
            return {
                user: null,
                isFetching: false,
                error: true,
            }
        case FOLLOW:
            return {
                ...state,
                user: {
                ...state.user,
                followings: [...state.user.followings, action.payload],
                },
            };
        case UNFOLLOW:
            return {
                ...state,
                user: {
                ...state.user,
                followings: state.user.followings.filter(
                    (following) => following !== action.payload
                ),
                },
            };
        default:
            return state;
        }
        };

export default userReducer;

