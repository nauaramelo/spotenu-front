const initialState = {
    logged: false,
    role: null
}

const login = (state = initialState, action) => {
    switch(action.type) {
        case "SET_LOGGED": {
            return {
                ...state,
                logged: action.payload.logged
            }
        }
        
        case "SET_ROLE": {
            return {
                ...state,
                role: action.payload.role
            }
        }

        default: {
            return state
        }
    }
}
export default login;