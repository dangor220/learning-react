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

// export default class App extends Component {
// 	render() {
// 		return <MailMessages unreadMessages={messages}/>;
// 	}
// }
// const messages = ['React', 'Re: React', 'Re:Re: React'];

// class MailMessages extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.unreadMessages = props.unreadMessages;
// 	}
// 	render() {
// 		return (
// 			<div>
// 				{this.unreadMessages.length > 0 && <h1>Hello, you have {this.unreadMessages.length} unread messages</h1>}
// 			</div>
// 		)
// 	}
// }

// export default class App extends Component {
// 	render() {
// 		return <Page />;
// 	}
// }
// class Page extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {showWarning: true};
// 		this.handleToggleClick = this.handleToggleClick.bind(this);
// 	}

// 	handleToggleClick() {
// 		this.setState(state => ({showWarning: !state.showWarning}))
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<WarningBanner warn={this.state.showWarning}/>
// 				<button onClick={this.handleToggleClick}>
// 					{this.state.showWarning ? 'Спрятать' : 'Показать'}
// 				</button>
// 			</div>
// 		)
// 	}
// }

// function WarningBanner(props) {
// 	if (!props.warn) {
// 		return null;
// 	}

// 	return (
// 		<div className="warning">
//       Предупреждение!
//     </div>
// 	)
// }

// const numbers = [1, 2, 3, 4, 5, 6];

// export default class App extends Component {
// 	render() {
// 		return <NumberList numbers={numbers} />;
// 	}
// }

// function NumberList(props) {
// 	const numbers = props.numbers;
// 	const numberList = numbers.map((number) => <li key={number.toString()}>{number}</li>);

// 	return <ul>{numberList}</ul>;
// }

// const posts = [
// 	{
// 		id: 1,
// 		title: 'Привет, мир',
// 		content: 'Добро пожаловать в документацию React!',
// 	},
// 	{ id: 2, title: 'Установка', content: 'React можно установить из npm.' },
// ];

// function Blog(props) {
// 	const sidebar = (
// 		<ul>
// 			{props.posts.map((post) => {
// 				return <li key={post.id}>{post.title}</li>;
// 			})}
// 		</ul>
// 	);
// 	const content = props.posts.map((post) => {
// 		return (
// 			<div key={post.id}>
// 				<h3>{post.title}</h3>
// 				<div>{post.content}</div>
// 			</div>
// 		);
// 	});
// 	return (
// 		<div>
// 			{sidebar}
// 			<hr />
// 			{content}
// 		</div>
// 	);
// }

// export default class App extends Component {
// 	render() {
// 		return <Blog posts={posts} />;
// 	}
// }

// export default class App extends Component {
// 	render() {
// 		return <NameForm />;
// 	}
// }

// class NameForm extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {value: ''};
// 		this.handleChange = this.handleChange.bind(this);
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 	}
// 	handleChange(event) {
// 		this.setState({value: event.target.value})
// 	}
// 	handleSubmit(event) {
// 		alert('Name user ' + this.state.value);
// 		event.preventDefault();
// 	}

// 	render() {
// 		return (
// 			<form onSubmit={this.handleSubmit}>
// 				Name:
// 				<input type="text" value={this.state.value} onChange={this.handleChange} />
// 				<input type="submit" value="submit"/>
// 			</form>
// 		)
// 	}
// }

// export default class App extends Component {
// 	render() {
// 		return <SelectForm />;
// 	}
// }

// class SelectForm extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {value: 'coconut'};

// 		this.handleChange = this.handleChange.bind(this);
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 	}

// 	handleChange(event) {
// 		this.setState({value: event.target.value})
// 	}
// 	handleSubmit(event) {
// 		alert('Selec default: ' + this.state.value);
// 		event.preventDefault()
// 	}

// 	render() {
// 		return (
// 			<form onSubmit={this.handleSubmit}>
// 			<label>
// 				Select product:
// 				<select value={this.state.value} onChange={this.handleChange}>
// 					<option value="grapefruit">Грейпфрут</option>
// 					<option value="lime">Лайм</option>
// 					<option value="coconut">Кокос</option>
// 					<option value="mango">Манго</option>
// 				</select>
// 			</label>
// 				<input type="submit" value="submit"/>
// 			</form>
// 		)
// 	}
// }

// export default class App extends Component {
// 	render() {
// 		return <Reservation />;
// 	}
// }

// class Reservation extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isGoing: true,
//       numberOfGuests: 2
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//   }

//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });
//   }

//   render() {
//     return (
//       <form>
//         <label>
//           Пойдут:
//           <input
//             name="isGoing"
//             type="checkbox"
//             checked={this.state.isGoing}
//             onChange={this.handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Количество гостей:
//           <input
//             name="numberOfGuests"
//             type="number"
//             value={this.state.numberOfGuests}
//             onChange={this.handleInputChange} />
//         </label>
//       </form>
//     );
//   }
// }

export default class App extends Component {
	render() {
		return <Calculator />;
	}
}

function BoilinVerdict(props) {
	if (props.celsius >= 100) {
		return <p>Вода закипит!</p>;
	}
	return <p>Вода не закипит!</p>;
}

const scaleNames = {
	c: 'Цельсия',
	f: 'Фаренгейта',
};
class Calculator extends Component {
	constructor(props) {
		super(props);
		this.state = { temperature: '', scale: 'c' };
		this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
	}

	handleCelsiusChange(temperature) {
		this.setState({ scale: 'c', temperature });
	}
	handleFahrenheitChange(temperature) {
		this.setState({ scale: 'f', temperature });
	}

	render() {
		const scale = this.state.scale;
		const temperature = this.state.temperature;
		const celsius =
			scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
		const fahrenheit =
			scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
		return (
			<div>
				<TemperatureInput
					scale="c"
					onTemperatureChange={this.handleCelsiusChange}
					temperature={celsius}
				/>
				<TemperatureInput
					scale="f"
					onTemperatureChange={this.handleFahrenheitChange}
					temperature={fahrenheit}
				/>
				<BoilinVerdict celsius={parseFloat(celsius)} />
			</div>
		);
	}
}

class TemperatureInput extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		// this.state = { temperature: '' };
	}
	handleChange(e) {
		// this.setState({ temperature: e.target.value });
		this.props.onTemperatureChange(e.target.value);
	}

	render() {
		const temperature = this.props.temperature;
		const scale = this.props.scale;

		return (
			<fieldset>
				<legend>Введите температуру в градусах по {scaleNames[scale]}</legend>
				<input onChange={this.handleChange} type="number" value={temperature} />
			</fieldset>
		);
	}
}

function toCelsius(fahrenheit) {
	return ((fahrenheit - 32) * 5) / 9;
}
function toFahrenheit(celsius) {
	return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
	const input = parseFloat(temperature);
	if (Number.isNaN(input)) {
		return '';
	}
	const output = convert(input);
	const rounded = Math.round(output * 1000) / 1000;
	return rounded.toString();
}
