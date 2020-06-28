import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import login from './login';
import genre from './genre';
import band from './band'

export const generateReducers = history =>
    combineReducers({
        router: connectRouter(history),
        login,
        genre,
        band
    });