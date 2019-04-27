import React, { Component } from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import newspaperIcon from '@iconify/react/twemoji/newspaper';
import upArrow from '@iconify/react/twemoji/up-arrow';
import questionMark from '@iconify/react/twemoji/question-mark';
import bookmarkTabs from '@iconify/react/twemoji/bookmark-tabs';

import Top from './top';
const [New, Ask, Show] = [Top, Top, Top];
const latest = <Top msg="top" type="topstories" load="load" />;

class NewsBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: latest,
		};
	}

	showTop() {
		this.setState({ active: latest });
	}

	showNew() {
		this.setState({ active: <New msg="new" type="newstories" load="load" /> });
	}

	showAsk() {
		this.setState({ active: <Ask msg="ask" type="askstories" load="load" /> });
	}

	showShow() {
		this.setState({ active: <Show msg="show" type="showstories" load="load" /> });
	}

	reload(param, event) {
		this.setState({ active: <Top msg={param} type={param} refresh="true" /> });
	}

	render() {
		return (
			<div className="board">
				<div className="news-container">
					<div className="news-body">{this.state.active}</div>
				</div>
				<footer>
					<button
						className="btn btn-info"
						onClick={this.showTop.bind(this)}
						onDoubleClick={this.reload.bind(this, 'topstories')}
					>
						<Icon icon={upArrow} />
						<div>Top</div>
					</button>
					<button
						className="btn btn-light"
						onClick={this.showNew.bind(this)}
						onDoubleClick={this.reload.bind(this, 'newstories')}
					>
						<Icon icon={newspaperIcon} />
						<div>New</div>
					</button>
					<button
						className="btn btn-secondary"
						onClick={this.showAsk.bind(this)}
						onDoubleClick={this.reload.bind(this, 'askstories')}
					>
						<Icon icon={questionMark} />
						<div>Ask</div>
					</button>
					<button
						className="btn btn-dark"
						onClick={this.showShow.bind(this)}
						onDoubleClick={this.reload.bind(this, 'showstories')}
					>
						<Icon icon={bookmarkTabs} />
						<div>Show</div>
					</button>
				</footer>
			</div>
		);
	}
}

export default NewsBoard;
