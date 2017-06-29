import React from 'react'

class UserTableRow extends React.Component {
	constructor(props) {
		super(props)

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		if (event.target.checked) {
			this.props.selectRow(this.props.user)
		} else {
			this.props.deselectRow(this.props.user)
		}
	}

	render() {
		return(
			<div>
				<form>
					<input type='checkbox' name='selected' onChange={this.handleChange} />
				</form>
				<div className='row-name'>
					{this.props.user.name}
				</div>
				<div className='row-email'>
					{this.props.user.email}
				</div>
			</div>
		)
	}
};

export default UserTableRow;