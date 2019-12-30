import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'
// import storage from 'redux-persist/es/storage'; // default: localStorage if web, AsyncStorage if react-native
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from '../reducers/index.js';

const config = {
    key: 'root',
    storage,
    blacklist: []
}

const reducers = persistReducer(config, rootReducer);

export default function configStore() {
    let store = createStore(reducers, applyMiddleware(thunk));
    let persistor = persistStore(store);
    persistor.purge();
    return {store, persistor};
}