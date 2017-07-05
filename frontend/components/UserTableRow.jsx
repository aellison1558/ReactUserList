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
			<div className='row'>
				<form className='row-check'>
					<input type='checkbox' name='selected' onChange={this.handleChange} />
				</form>
				<div className='row-content'>
					<div className='row-name row-content-inner'>
						{this.props.user.name}
					</div>
					<div className='row-email row-content-inner'>
						{this.props.user.email}
					</div>
				</div>
				
			</div>
		)
	}
};

export default UserTableRow;