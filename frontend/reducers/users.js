const initialState = {
	users: []
}

const users = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_USERS':
			return Object.assign({}, state, {
				users: action.users
			})

		default: 
			return state;
	}
}

export default users