import { createStore } from 'redux'
import usersReducer from './reducers/users.js'

let store = createStore(usersReducer);