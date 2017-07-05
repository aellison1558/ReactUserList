import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware} from 'redux'
import usersReducer from './reducers/users.js'

let store = createStore(usersReducer, applyMiddleware(thunkMiddleware));

export default store;