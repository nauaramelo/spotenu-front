import axios from 'axios'; 
import {routes} from '../containers/Router';
import { push } from 'connected-react-router';

const baseUrl = process.env.REACT_APP_BASE_URL

export const setAllGenres = (genres) => {
    return {
        type: "SET_GENRES",
        payload: {
            genres
        }
    }
}

export const listGenres = () => async (dispatch) => {

    try {

        const token = window.localStorage.getItem('token')

        const response = await axios.get(`${baseUrl}/genres/all`, 
        { headers: {
            Authorization: token
        }})

        const genres = response.data.genres

        dispatch(setAllGenres(genres))

    } catch (error) {
        alert('Por favor, tentar novamente.')
    }
}

export const addGenre = (form) => async (dispatch) => {
    const token = window.localStorage.getItem('token')

    const { name } = form

    try {
        
        const response = await axios.post(`${baseUrl}/genres/add`, form, 
        { headers: {
            Authorization: token
        }})

        dispatch(push(routes.listGenre))
    } catch (error) {
        console.log(error)
    }
}