import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SignUp from './signup';

class Login extends Component {
	constructor(props) {
		super(props);
		this.email = null;
		this.password = null;
	}

	handleEmail(event) {
		this.email = event.target.value;
		console.log(this.email);
	}

	handlePassword(event) {
		this.password = event.target.value;
		console.log(this.password);
	}

	render() {
		return (
			<div>
				<input type="email" placeholder="email" onChange={this.handleEmail.bind(this)} />
				<input type="password" placeholder="password" onChange={this.handlePassword.bind(this)} />
				<button type="button">Sign In</button>
				<hr />
				<Router>
					<Switch>
						<Route exact path="/" component={SignUp} />
						<Route path="/signup" component={SignUp} />
						<Link to="/signup">Sign Up</Link>
					</Switch>
				</Router>
			</div>
		);
	}
}

export default Login;
