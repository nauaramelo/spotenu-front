import axios from 'axios'; 
import { push } from 'connected-react-router';
import { routes } from '../containers/Router';

const baseUrl = process.env.REACT_APP_BASE_URL

export const setAllAlbums = (albums) => {
    return {
        type: "SET_ALBUMS",
        payload: {
            albums
        }
    }
}


export const listAlbums = () => async (dispatch) => {

    try {

        const token = window.localStorage.getItem('token')

        const response = await axios.get(`${baseUrl}/albums/all`, 
        {
            headers: {
                Authorization: token
            }
        })

        const albums = response.data.albums

        dispatch(setAllAlbums(albums))

    } catch (error) {
        alert('Por favor, tentar novamente.')
    }
}

export const createAlbum = (form) => async (dispatch) => {
    const token = window.localStorage.getItem('token')

    try {

        const response = await axios.post(`${baseUrl}/albums/add`, form, 
        {
            headers: {
                Authorization: token
            }
        })

        alert('Album adicionado com sucesso!')
        /* functionClear() */
        
    } catch (error) {
        alert('Por favor, tentar novamente.')
    }
}