import store from '../store.js'
import fetch from 'isomorphic-fetch'
import addUsers from './UserActions.js'

const fetchUsers = () => {
	return( function(dispatch) { return fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(json => store.dispatch(addUsers(json))) } )
}


export default fetchUsers;