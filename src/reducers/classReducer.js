const initialState = {
    classList: null
}

export default (state=initialState, action) => {
    switch (action.type) {
        case 'CLASS_LIST':
            return {
                ...state,
                classList: action.data
            }
        default: return state
    }
}