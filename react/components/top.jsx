import React, { Component, Fragment } from 'react';
import axios from 'axios';
import NProgress from 'nprogress';

class Top extends Component {
	constructor(props) {
		super(props);
		this.news_items = new Map();
	}

	componentWillMount() {
		console.log(`I'm about to mount!!`);
		NProgress.start();

		// load initial news;
		const kinds = ['topstories', 'newstories', 'askstories', 'showstories'];
		for (const value of kinds) {
			axios
				.get(`https://hacker-news.firebaseio.com/v0/${value}.json?print=pretty`)
				.then(res => {
                    this.news_items.set(value, res.data);
                    console.log(res.data);
				})
				.catch(err => console.log(err));
		}
		console.log(this.news_items.get('topstories'));
		NProgress.done().remove();
	}

	renderNews() {}

	loadNews(which) {
		NProgress.start();
		axios
			.get(`https://hacker-news.firebaseio.com/v0/${this.props.type}.json`, { params: { print: `pretty` } })
			.then(res => {
				console.log(res.data);
				NProgress.done().remove();
			})
			.catch(err => {
				alert(err);
				NProgress.done().remove();
			});
	}

	render() {
		return (
			<Fragment>
				<h2>{this.props.msg}</h2>
				{this.props.refresh ? this.loadNews() : null}
			</Fragment>
		);
	}
}

export default Top;
