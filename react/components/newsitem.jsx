import React from 'react';

const NewsItem = props => (
	<div id="news-content">
		<div className="news-title" />
        <div><a href={props.url} target="_blank">{props.title}</a></div>
		<span>
			{props.score} by {props.by}
		</span>
	</div>
);

export default NewsItem;
