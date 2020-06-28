import axios from 'axios'; 
import {routes} from '../containers/Router';
import { push } from 'connected-react-router';

const baseUrl = process.env.REACT_APP_BASE_URL

export const setAllBands = (bands) => {
    return {
        type: "SET_BANDS",
        payload: {
            bands
        }
    }
}

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

export const listBands = () => async (dispatch) => {
    const token = window.localStorage.getItem('token')

    try {
        const response = await axios.get(`${baseUrl}/bands/all`, 
        {
            headers: {
                authorization: token
            }
        })

        const bands = response.data.bands

        dispatch(setAllBands(bands))
        
    } catch (error) {
        alert('Por favor, tentar novamente')
    }
}

export const approveBand = (id) => async (dispatch) => {
    const token = window.localStorage.getItem('token')

    try {

        const response = await axios.post(`${baseUrl}/bands/${id}/approve`, {}, 
        {
            headers: {
                Authorization: token
            }
        })

        alert('Banda aprovada!' )
        
    } catch (error) {
        alert('Por favor, tentar novamente.')
    }
}