import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';

// export default class App extends Component {
// 	render() {
// 		return (
// 			<Comment
// 				name={userInfo.name}
// 				url={userInfo.url}
// 				comment={userInfo.comment}
// 				dateComment={userInfo.dateComment}
// 			/>
// 		);
// 	}
// }

// const userInfo = {
// 	name: 'Alex',
// 	url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Ak1LutdEbTrXWsr6JSJNOUWhLpNbKY4bmb4eBAYy&s',
// 	comment: 'I\'m send a message',
// 	dateComment: new Date(),
// };

// function Comment(props) {
// 	return (
// 		<div className="comment">
// 			<UserInfo user={props.name} url={props.url} />
// 			<UserComment comment={props.comment} />
// 			<DateComment dateComment={props.dateComment} />
// 		</div>
// 	);
// }

// function Avatar(props) {
// 	return <img className="user-image" src={props.url} alt={props.name} />;
// }

// function Name(props) {
// 	return <div className="user-name">Hey! I'm {props.name}</div>;
// }

// function UserInfo(props) {
// 	return (
// 		<div className="user-info">
// 			<Name name={props.user} />
// 			<Avatar name={props.user} url={props.url} />
// 		</div>
// 	);
// }

// function UserComment(props) {
// 	return <div className="user-comment">{props.comment}</div>;
// }

// function formDate(date) {
// 	return date.toLocaleDateString();
// }
// function DateComment(props) {
// 	return <div className="user-comment-data">{formDate(props.dateComment)}</div>;
// }

// export default class App extends Component {
// 	render() {
// 		return (<Clock />)
// 	}
// }

// class Clock extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {date: new Date()};
// 	}
// 	componentDidMount() {
// 		this.timerID = setInterval(() => this.tick(), 1000)
// 	}
// 	componentWillUnmount() {
// 		clearInterval(this.timerID)
// 	}
// 	tick() {
// 		this.setState({
// 			date: new Date()
// 		})
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<h1>Таймер</h1>
// 				<h2>Сейчас: {this.state.date.toLocaleTimeString()}</h2>
// 			</div>
// 		)
// 	}
// }

// export default class App extends Component {
// 	render() {
// 		return <Form/>
// 	}
// }

// class Form extends Component {
// 	constructor (props) {
// 		super(props);
// 		this.handleDefault = this.handleDefault.bind(this);
// 	}
// 	handleDefault(e) {
// 		e.preventDefault();
// 		console.log('Форма отправлена');
// 	}
// 	render() {
// 		return (
// 			<form onSubmit={this.handleDefault}>
// 				<button type="submit">Отправить</button>
// 			</form>
// 		)
// 	}

// }


export default class App extends Component {
	render() {
		return <Greeting isLoggedIn={true}/>
	}
}

function Greeting(props) {
	let isLoggedIn = props.isLoggedIn;

	if (isLoggedIn) {
		return <UserGreeting/>
	}
		return <GuestGreeting/>
}
function UserGreeting() {
	return <h1>Hello User!</h1>
}
function GuestGreeting() {
	return <h1>Enter User Name!</h1>
}