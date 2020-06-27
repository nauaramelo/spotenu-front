import axios from 'axios'; 
import {routes} from '../containers/Router';
import { push } from 'connected-react-router';

const baseUrl = process.env.REACT_APP_BASE_URL

export const setLogged = (logged) => {

    return {
        type: "SET_LOGGED",
        payload: {
            logged
        }
    }
}

export const setRole = (role) => {

    return {
        type: "SET_ROLE",
        payload: {
            role
        }
    }
}

export const setUserLoggedInApplication = (accessToken, role, dispatch) => {
    window.localStorage.setItem('token', accessToken)
    window.localStorage.setItem('role', role)

    dispatch(setLogged(true))
    dispatch(setRole(role)) 
    dispatch(push(routes.home))
}

export const login = (nicknameOrEmail, password) => async (dispatch) => {

    const data = {
        nicknameOrEmail,
        password
    }

    try {
        const response = await axios.post(`${baseUrl}/users/login`, data)

        const token = response.data.accessToken
        const role = response.data.role
    
        setUserLoggedInApplication(token, role, dispatch)
        
    } catch (error) {
        //Ver um jeito de resposta melhor. 
        alert('Por favor, tentar novamente.')
    }

} 