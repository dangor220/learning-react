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

// export default class App extends Component {
// 	render() {
// 		return <LoginControl />;
// 	}
// }

// function Greeting(props) {
// 	let isLoggedIn = props.isLoggedIn;

// 	if (isLoggedIn) {
// 		return <UserGreeting />;
// 	}
// 	return <GuestGreeting />;
// }
// function UserGreeting() {
// 	return <h1>Hello User!</h1>;
// }
// function GuestGreeting() {
// 	return <h1>Enter User Name!</h1>;
// }

// class LoginControl extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { isLoggedIn: false };
// 		this.handleLoginClick = this.handleLoginClick.bind(this);
// 		this.handleLogoutClick = this.handleLogoutClick.bind(this);
// 	}
// 	handleLoginClick() {
// 		this.setState({ isLoggedIn: true });
// 	}
// 	handleLogoutClick() {
// 		this.setState({ isLoggedIn: false });
// 	}
// 	render() {
// 		const isLoggedIn = this.state.isLoggedIn;
// 		let button;

// 		if (isLoggedIn) {
// 			button = <LogoutButton onClick={this.handleLogoutClick} />;
// 		} else {
// 			button = <LoginButton onClick={this.handleLoginClick} />;
// 		}

// 		return (
// 			<div>
// 				<Greeting isLoggedIn={isLoggedIn} />
// 				{button}
// 			</div>
// 		);
// 	}
// }

// function LoginButton(props) {
// 	return <button onClick={props.onClick}>Войти</button>;
// }
// function LogoutButton(props) {
// 	return <button onClick={props.onClick}>Выйти</button>;
// }


export default class App extends Component {
	render() {
		return <MailMessages unreadMessages={messages}/>;
	}
}
const messages = ['React', 'Re: React', 'Re:Re: React'];

class MailMessages extends Component {
	constructor(props) {
		super(props);
		this.unreadMessages = props.unreadMessages;
	}
	render() {
		return (
			<div>
				{this.unreadMessages.length > 0 && <h1>Hello, you have {this.unreadMessages.length} unread messages</h1>}
			</div>
		)
	}
}

