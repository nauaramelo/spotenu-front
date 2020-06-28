const initialState = {
    genres: []
}

const Genres = (state = initialState, action) => {
    switch (action.type) {
        case "SET_GENRES" : {
            return {
                genres: action.payload.genres
            }
        }

        default:
            return state;
    }
}

export default Genres