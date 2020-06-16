import axios from 'axios'; 

const baseUrl = 'xupeta'

export const login = (credential, password) => async (dispatch) => {

    const data = {
        credential,
        password
    }

    try {
        const response = await axios.post((baseurl), data)

        const token = response.data.token;

        window.localStorage.setItem("token", token)

        dispatch(push(routes.home))
    } catch (error) {
        //Ver um jeito de resposta melhor. 
        alert('Por favor, tentar novamente.')
    }
}