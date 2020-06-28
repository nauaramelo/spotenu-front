import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import login from './login'
import genre from './genre'

export const generateReducers = history =>
    combineReducers({
        router: connectRouter(history),
        login,
        genre
    });