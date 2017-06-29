import React from 'react'
import ReactDOM from 'react-dom'
import UserTable from './frontend/components/UserTable.jsx'

const App = () => (
	<div>
		<UserTable/>
	</div>
);

document.addEventListener("DOMContentLoaded", function(){
	ReactDOM.render(<App/>, document.getElementById('root'));
});