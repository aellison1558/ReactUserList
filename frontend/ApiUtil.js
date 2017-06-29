import $ from 'jquery'
import store from './store.js'

const ApiUtil = {
	fetchUsers: function() {
		$.get('https://jsonplaceholder.typicode.com/users', function(users) {
			store.dispatch(addUsers(users));
		})
	}
}

export default 