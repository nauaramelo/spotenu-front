const initialState = {
    bands: []
}

const Bands = (state = initialState, action) => {
    switch (action.type) {
        case "SET_BANDS" : {
            return {
                bands: action.payload.bands
            }
        }

        default:
            return state;
    }
}

export default Bands