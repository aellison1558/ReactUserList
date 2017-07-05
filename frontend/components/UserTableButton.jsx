import React from 'react'
import {CSVLink, CSVDownload} from 'react-csv';

class UserTableButton extends React.Component {
	render() {
		const data = this.props.users.map(user => {return {name: user.name} });
		console.log(data);
		return(
			<CSVLink data={data} filename={"selected_users.csv"} className="btn btn-primary">Submit</CSVLink>
		)
	}
		
}

export default UserTableButton