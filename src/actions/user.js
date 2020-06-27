import axios from 'axios'; 
import {routes} from '../containers/Router';
import { push } from 'connected-react-router';
import { setUserLoggedInApplication } from './login'

const baseUrl = process.env.REACT_APP_BASE_URL

export const signup = (form) => async (dispatch) => {

    const { name, nickname, email, password, confirmPassword } = form

    try {
        
       const response = await axios.post(`${baseUrl}/users/signup-listener`, form)

       const token = response.data.acessToken
       const role = response.data.role

        setUserLoggedInApplication(token, role, dispatch)
    } catch (error) {
        alert('Por favor, tentar novamente.')
    }
}