const initialState = {
    loginStatus: null
}

export default (state= initialState, action)  => {
    switch(action.type) {
        case 'POST_LOGIN_DATA':
            console.log("Action si", action.data) 
            return {
                ...state,
                loginStatus: action.data
            }
        default: 
            return state    
    }
}