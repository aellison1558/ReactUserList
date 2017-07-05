import React from 'react'
import { connect } from 'react-redux'
import UserTable from './UserTable.jsx'
import { fetchUsers } from '../actions/ApiActions.js'

const mapStateToProps = (state, ownProps) => {
	return {
		users: state.users
	}
}


class UserTableContainer extends React.Component {

	render() {
		return(
			<div>
				<UserTable users={this.props.users}/>
			</div>
		) 
	}
}

export default connect(mapStateToProps)(UserTableContainer);
