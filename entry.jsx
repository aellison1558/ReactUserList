import React from 'react'
import ReactDOM from 'react-dom'
import UserTableContainer from './frontend/components/UserTableContainer.jsx'
import { Provider } from 'react-redux'
import store from './frontend/store.js'
import 'babel-polyfill'

const App = () => (
	<Provider store={store}>
		<UserTableContainer/>
	</Provider>
);

document.addEventListener("DOMContentLoaded", function(){
	ReactDOM.render(<App/>, document.getElementById('root'));
});