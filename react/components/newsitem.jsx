import React from 'react';

const NewsItem = (props) => <div id='news-content'>
    <div className='news-title'></div>    
    <span>{props.score} by {props.by} | {props.time} | {props.kids}</span>
</div>;

export default NewsItem;
