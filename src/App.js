import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
	render() {
		return (
			<Comment
				name={userInfo.name}
				url={userInfo.url}
				comment={userInfo.comment}
				dateComment={userInfo.dateComment}
			/>
		);
	}
}

const userInfo = {
	name: 'Osya',
	url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Ak1LutdEbTrXWsr6JSJNOUWhLpNbKY4bmb4eBAYy&s',
	comment: 'Prosa the best friend',
	dateComment: new Date(),
};

function Comment(props) {
	return (
		<div className="comment">
			<UserInfo user={props.name} url={props.url} />
			<Text comment={props.comment} />
			<DateComment dateComment={props.dateComment} />
		</div>
	);
}

function Avatar(props) {
	return <img className="user-image" src={props.url} alt={props.name} />;
}

function Name(props) {
	return <div className="user-name">Hey! I'm {props.name}</div>;
}

function UserInfo(props) {
	return (
		<div className="user-info">
			<Name name={props.user} />
			<Avatar name={props.user} url={props.url} />
		</div>
	);
}

function Text(props) {
	return <div className="user-comment">{props.comment}</div>;
}

function formDate(date) {
	return date.toLocaleDateString();
}
function DateComment(props) {
	return <div className="user-comment-data">{formDate(props.dateComment)}</div>;
}
