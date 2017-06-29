const users = (state = [], action) => {
	switch (action.type) {
		case 'ADD_USERS':
			return Object.assign({}, state, {
				users: action.users
			})
	}
}

export default users