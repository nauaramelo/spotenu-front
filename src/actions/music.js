import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL

export const createMusic = (data) => async (dispatch) => {
    const token = window.localStorage.getItem('token')

    try {
        const response = await axios.post(`${baseUrl}/musics/add`, data, 
        {
            headers: {
                Authorization: token
            }
        })  
        
        alert('Música criada com sucesso. ')
    } catch (error) {
        alert('Por favor tentar novamente.')
    }
}