import React from 'react';

const openBrowser = (param, event) => {
	// window.open(param, '_system');
	cordova.InAppBrowser.open(param, '_blank', 'location=yes');
};

const openExternal = (param, event) => {
	window.open(param, '_system');
};

const NewsItem = props => (
	<div className="news-content" onDoubleClick={openExternal.bind(this, props.url)}>
		<div className="news-title" />
		<div>
			<a href={props.url} target="_blank" onClick={openBrowser.bind(this, props.url)}>
				{props.title}
			</a>
		</div>
		<span id="last">
			<span className="score">{props.score}</span> by <span className="by">{props.by}</span>
		</span>
	</div>
);

export default NewsItem;
