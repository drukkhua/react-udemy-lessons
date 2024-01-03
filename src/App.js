import { useState } from 'react';
import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import OtherComponent from './components/OtherComponent';
import PetInfo from './components/PetInfo';
import RandomNumber from './components/RandomNumber';
import Counter from './components/Counter';
import Button from './components/Button';
import Persons from './components/Persons';
import Reset from './components/Reset';
import CardNew from './components/CardNew';
import Login from './components/Login';
import LoginControl from './components/LoginContol';
import Wrapper from './components/wrapper';
import Posts from './components/Posts';

const texts = [
	'click me 1',
	'click me 2',
	'click me 3',
	'click me 4',
	'click me again',
	'click me!!!',
];

function App() {
	// 24 - fetch + useEffect
	const [todo, setTodo] = useState(null);
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos/5')
			.then((response) => response.json())
			.then((json) => setTodo(json));
	}, []);
	// console.log('App rendered');
	// console.log(todo);

	const [count, setCount] = useState(0);
	const incrementCount = () => {
		setCount(count + 1);
	};
	const resetCount = () => {
		setCount(0);
	};
	const buttonStyle = { backgroundColor: 'lightgreen' };

	return (
		<div className="App">
			<header className="App-header">
				<img
					src={logo}
					className="App-logo"
					alt="logo"
				/>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<Posts />
				{/* {!!todo && <h1>{todo.title}</h1>} */}

				{/* Login  21 раздел - неконтролируемые инпуты в react */}
				{/* <Login /> */}

				{/* Login  22 раздел - контролируемые инпуты в react */}
				{/* <LoginControl /> */}

				{/* Login  23 раздел - wraper with children */}
				{/* <Wrapper color="lightblue">
					<h2>Text inside wrapper</h2>
					<button>Click me</button>
				</Wrapper>
				<Wrapper color="lightgreen">
					<h2>Text inside wrapper #2</h2>
					<button>Click me #2</button>
				</Wrapper> */}

				{/* 20 глава - Fragment  */}
				{/* <CardNew /> */}

				{/* увеличение счетчика при нажатии на кнопки */}
				{/* <Counter count={count} />
				<div className="cards">
					{texts.map((text, index) => {
						return (
							<Button
								onClick={incrementCount}
								text={text}
								key={index - 100}
							/>
						);
					})}
				</div> */}
				{/* кнопка по уроку Udemy, count=0 не отображает - РАЗДЕЛ-19*/}
				{/* <Reset
					count={count}
					onClick={resetCount}
				/> */}

				{/* кнопка сброса счетчика мой варианат - РАЗДЕЛ-19 */}
				{/* <Button
					onClick={resetCount}
					text={`Reset - My version: ${count}`}
					key={10005}
				/> */}

				{/* прорисовка массива Persons обобъектов 50 шт.*/}
				{/* <Persons /> */}
				{/* {persons.map((person) => {
					return (
						<Person
							person={person}
							key={person.id}
						/>
					);
				})} */}
				{/* <Button
					onClick={incrementCount}
					text="click me 1"
				/>
				<Button
					onClick={incrementCount}
					text="click me 2"
				/>
				<Button
					onClick={incrementCount}
					text="click me 3"
				/>
				<Button
					onClick={incrementCount}
					text="click me 4"
				/> */}
				{/* генерация случайного числа от 0 до 1000 */}
				{/* <RandomNumber maxNum={1000} />
				<MyComponent />
				<OtherComponent /> */}
				{/* простое использование передачи параметров */}
				{/* <PetInfo
					animal={'dog'}
					age={5}
					hasPet={false}
				/>
				<PetInfo
					animal={'cat'}
					age={10}
					hasPet={true}
				/> */}
			</header>
		</div>
	);
}

export default App;
