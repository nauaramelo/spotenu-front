import axios from 'axios'; 
import {routes} from '../containers/Router';
import { push } from 'connected-react-router';

export const setLogged = (logged) => {
    console.log('setLogged', logged)

    return {
        type: "SET_LOGGED",
        payload: {
            logged
        }
    }
}

export const login = (credential, password) => async (dispatch) => {
    try {
        const token = 'oi'

        window.localStorage.setItem('token', token)
        window.localStorage.setItem('role', 'Admin')

        dispatch(setLogged(true))
        dispatch(push(routes.home))
    } catch (error) {
        //Ver um jeito de resposta melhor. 
        alert('Por favor, tentar novamente.')
    }
} 