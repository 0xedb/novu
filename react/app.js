import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import NewsBoard from './components/newsboard';

class App extends Component {
	constructor(props) {
		super(props);
		this.timeout = 100;
		this.state = {
			continue: false,
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ continue: true });
		}, this.timeout);
	}

	displayNotice() {
		// window.localStorage.getItem('old') ? null : alert('Double tap the button to refresh news');
	}

	render() {
		{
			console.log('started!!!!!!!!!!!!!');
		}
		return this.state.continue ? (
			<Fragment>
				<NewsBoard />
				{setTimeout(() => this.displayNotice(), this.timeout)}
			</Fragment>
		) : (
			<div className="landing">
				<div className="animate">
					<h1>Novu::News</h1>
				</div>
			</div>
		);
	}
}

render(<App />, document.querySelector('#app'));
