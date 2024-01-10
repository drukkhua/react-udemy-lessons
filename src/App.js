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
import Info from './components/Info';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import { v4 as uuidv4 } from 'uuid';
import TodosActions from './components/Todos/TodosActions';

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

	// #28 - TODO_APP
	const [todos, setTodos] = useState([]);

	const addTodoHandler = (text) => {
		const newTodo = {
			text: text,
			isCompleted: false,
			id: uuidv4(),
		};
		setTodos([...todos, newTodo]);
	};
	const deleteTodoHandler = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const togleTodoHandler = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id
					? { ...todo, isCompleted: !todo.isCompleted }
					: { ...todo }
			)
		);
	};

	const deleteCompletedHandler = () => {
		setTodos(todos.filter((todo) => !todo.isCompleted));
	};

	const resetTodosHandler = () => {
		setTodos([]);
	};
	const comletedTodosCount = todos.filter(
		(todo) => todo.isCompleted
	).length;

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

				{/* TODO_App #28 */}
				<h1>Todo App</h1>
				<TodoForm addTodo={addTodoHandler} />

				{!!todos.length && (
					<TodosActions
						deleteCompleted={deleteCompletedHandler}
						resetTodos={resetTodosHandler}
						completedTodosExist={!!comletedTodosCount}
					/>
				)}
				<TodoList
					todos={todos}
					deleteTodo={deleteTodoHandler}
					togleTodo={togleTodoHandler}
				/>

				{comletedTodosCount > 0 && (
					<h3>
						You have completed {comletedTodosCount} todo
						{comletedTodosCount > 1 ? 's' : ''}.
					</h3>
				)}

				{/* Раздел 27 - modules.css */}
				{/* <Info />
				<div className="info">
					<h1>App component heading</h1>
					<button className="my-bytton">App component button</button>
				</div> */}
				{/* 23 раздел - асинхронные промисы и реализация через asyn await */}
				{/* <Posts /> */}

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
