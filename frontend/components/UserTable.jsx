import React from 'react'
import UserTableRow from './UserTableRow.jsx'
import UserTableButton from './UserTableButton.jsx'

class UserTable extends React.Component {
	constructor(props) {
		super(props)
		this.state = {selected: []}

		this.selectRow = this.selectRow.bind(this);
		this.deselectRow = this.deselectRow.bind(this);
	}

	selectRow(user) {
		const updatedSelected = this.state.selected;
		updatedSelected.push(user);
		this.setState({selected: updatedSelected})
	}

	deselectRow(user) {
		const updatedSelected = this.state.selected;
		const index = updatedSelected.indexOf(user);
		if (index > -1) {
			updatedSelected.splice(index, 1)
		}
		this.setState({selected: updatedSelected})
	}

	render() {
		return(
			<div className='table'>
				<span>{this.state.selected.length} of {this.props.users.length} selected</span>
				<ul>
					{this.props.users.map(user => <li key={user.id}><UserTableRow user={user} selectRow={this.selectRow} deselectRow={this.deselectRow} /></li>)}
				</ul>
				<UserTableButton users={this.state.selected} />
			</div>
		)
	}
}

export default UserTable;