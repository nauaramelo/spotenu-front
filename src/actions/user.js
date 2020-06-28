import axios from 'axios'; 
import {routes} from '../containers/Router';
import { push } from 'connected-react-router';
import { setUserLoggedInApplication } from './login'

const baseUrl = process.env.REACT_APP_BASE_URL

export const signup = (form) => async (dispatch) => {

    try {
        
       const response = await axios.post(`${baseUrl}/users/signup-listener`, form)

       const token = response.data.acessToken
       const role = response.data.role

        setUserLoggedInApplication(token, role, dispatch)
    } catch (error) {
        alert('Por favor, tentar novamente.')
    }
}

export const signupAdmin = (form) => async (dispatch) => {
    const token = window.localStorage.getItem('token')

    try {

        await axios.post(`${baseUrl}/users/signup-admin`, form,
        {
            headers: {
                Authorization: token
            }
        })

        alert('Administrador Cadastrado com sucesso.')

    } catch (error) {
        alert('Por favor, tentar novamente.')
    }
}