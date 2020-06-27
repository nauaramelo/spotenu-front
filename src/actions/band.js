import axios from 'axios'; 
import {routes} from '../containers/Router';
import { push } from 'connected-react-router';

const baseUrl = process.env.REACT_APP_BASE_URL

export const signupBand = (form) => async (dispatch) => {

    const { name, nickname, email, password, confirmPassword, description } = form

    try {
        
       const response = await axios.post(`${baseUrl}/bands/signup`, form)

        alert('Banda Cadastrada com sucesso, você receberá um email após aprovação.')

       dispatch(push(routes.root))

    } catch (error) {
        alert('Por favor, tentar novamente.')
    }
}