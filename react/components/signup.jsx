import React, { Component } from 'react';

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.email = null;
        this.password = null;
        this.name = null;
    }
    
    handleEmail(event) {
		this.email = event.target.value;
		console.log(this.email);
	}

	handlePassword(event) {
		this.password = event.target.value;
		console.log(this.password);
    }
    
    handleName(event) {
		this.name = event.target.value;
		console.log(this.name);
	}

	render() {
		return (
			<div>
                <input type='text' placeholder='name' onChange={this.handleName.bind(this)} />
				<input type="email" placeholder="email" onChange={this.handleEmail.bind(this)} />
				<input type="password" placeholder="password" onChange={this.handlePassword.bind(this)} />
                <button type="button">Register</button>
			</div>
		);
	}
}

export default SignUp;
