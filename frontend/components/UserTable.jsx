import React from 'react'
import UserTableRow from './UserTableRow.jsx'

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

		const examples = [{
id: 1,
name: "Leanne Graham",
username: "Bret",
email: "Sincere@april.biz",
address: {
street: "Kulas Light",
suite: "Apt. 556",
city: "Gwenborough",
zipcode: "92998-3874",
geo: {
lat: "-37.3159",
lng: "81.1496"
}
},
phone: "1-770-736-8031 x56442",
website: "hildegard.org",
company: {
name: "Romaguera-Crona",
catchPhrase: "Multi-layered client-server neural-net",
bs: "harness real-time e-markets"
}
},

{
id: 2,
name: "Ervin Howell",
username: "Antonette",
email: "Shanna@melissa.tv",
address: {
street: "Victor Plains",
suite: "Suite 879",
city: "Wisokyburgh",
zipcode: "90566-7771",
geo: {
lat: "-43.9509",
lng: "-34.4618"
}
},
phone: "010-692-6593 x09125",
website: "anastasia.net",
company: {
name: "Deckow-Crist",
catchPhrase: "Proactive didactic contingency",
bs: "synergize scalable supply-chains"
}
}]
		return(
			<div>
				<span>{this.state.selected.length} of {examples.length} selected</span>
				<ul>
					{examples.map(user => <li key={user.id}><UserTableRow user={user} selectRow={this.selectRow} deselectRow={this.deselectRow} /></li>)}
				</ul>
				<button>Confirm button</button>
			</div>
		)
	}
}

export default UserTable;