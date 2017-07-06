import React from 'react'
import { connect } from 'react-redux'
import UserTable from './UserTable.jsx'
import fetchUsers from '../ApiUtil.js'

const mapStateToProps = (state, ownProps) => {
	return {
		users: state.users
	}
}


class UserTableContainer extends React.Component {
	componentDidMount() {
		fetchUsers();
	}

	render() {
		return(
			<div>
				<UserTable users={this.props.users}/>
			</div>
		) 
	}
}

export default connect(mapStateToProps)(UserTableContainer);
