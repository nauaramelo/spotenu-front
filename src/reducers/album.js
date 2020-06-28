const initialState = {
    albums: []
}

const albums = (state = initialState, action) => {
    switch (action.type) {
        case "SET_ALBUMS" : {
            return {
                albums: action.payload.albums
            }
        }

        default:
            return state;
    }
}

export default albums;