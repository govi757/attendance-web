import {combineReducers} from 'redux';
import AuthReducer from './authReducers';
import ClassReducer from './classReducer'
const appReducer = combineReducers({
    AuthReducer,
    ClassReducer
})

const rootReducer = (state, action) => {
    if(action.type === 'USER_LOGOUT') {
        state = {};
    }
    return appReducer(state, action);
}

export default rootReducer;