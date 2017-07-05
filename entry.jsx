import React from 'react'
import ReactDOM from 'react-dom'
import UserTableContainer from './frontend/components/UserTableContainer.jsx'
import { Provider } from 'react-redux'
import store from './frontend/store.js'
import AddUser from './frontend/actions/UserActions.js'
import fetchUsers from './frontend/actions/ApiActions.js'
import 'babel-polyfill'

console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)


store.dispatch(fetchUsers());

const App = () => (
	<Provider store={store}>
		<UserTableContainer/>
	</Provider>
);

document.addEventListener("DOMContentLoaded", function(){
	ReactDOM.render(<App/>, document.getElementById('root'));
});