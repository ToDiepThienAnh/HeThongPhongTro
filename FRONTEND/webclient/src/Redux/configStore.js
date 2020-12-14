import {combineReducers, createStore} from 'redux';
import PhongReducer from './PhongReducer'


const rootReducer = combineReducers({
    // khai báo reducer tại đây
    PhongReducer
})

 const store = createStore(rootReducer);

 export default store