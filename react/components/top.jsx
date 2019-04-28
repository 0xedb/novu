import React, { Component, Fragment } from 'react';
import axios from 'axios';
import NProgress from 'nprogress';
import NewItem from './newsitem';
import $ from 'jquery';

class Top extends Component {
	constructor(props) {
		super(props);
		this.news_items = new Map();
		this.articlce = [];
		this.count = 0;
		this.state = {
			doneNews: null,
		};
	}

	renderNews(type) {
		this.news_items.get(type).forEach((id, key, map) => {
			axios
				.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
				.then(res => {
					// console.log(this.count++);
					this.count++;
					const properties = {
						url: res.data.url,
						title: res.data.title,
						score: res.data.score,
						by: res.data.by,
						tile: res.data.time,
						kids: res.data.kids,
						key: Math.random() + this.count + res.data.by,
					};
					this.articlce.push(<NewItem {...properties} />);
					if (this.count === 1 || this.count % 20) {
						this.setState({ doneNews: this.count });
					}
				})
				.catch(err => console.log(err));
		});
	}

	loadNews(type, load = false) {
		NProgress.start();
		if (load && this.news_items.has(type)) {
			this.article = [];
			NProgress.done().remove();
			return;
		} // prevent unecessary reload

		axios
			.get(`https://hacker-news.firebaseio.com/v0/${type}.json`, { params: { print: `pretty` } })
			.then(res => {
				this.news_items.set(type, res.data);

				// render
				this.renderNews(type);
			})
			.then(NProgress.done().remove())
			.catch(err => {
				alert(err);
				NProgress.done().remove();
			});
	}

	render() {
		return (
			<Fragment>
				{this.articlce.map(e => e)}
				{this.props.refresh ? this.loadNews(this.props.type) : null}
				{this.props.load ? this.loadNews(this.props.type, true) : null}
			</Fragment>
		);
	}
}

export default Top;
