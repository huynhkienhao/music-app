import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authAdminReducer from './reducers/authAdminReducer';
import authReducer from './reducers/authReducer';
import categoryReducer from './reducers/categoryReducer';
import songReducer from './reducers/songReducer';
import userReducer from './reducers/userReducer';
import itemReducer from './reducers/itemReducer';
import favoriteReducer from './reducers/favoriteReducer';
// import rootReducer from '../Admin/reducers/index';

const rootReducer = combineReducers({
    authAdmin: authAdminReducer,
    auth: authReducer,
    category: categoryReducer,
    item: itemReducer,
    song: songReducer,
    user: userReducer,
    favorite: favoriteReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
