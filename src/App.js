import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import OtherComponent from './components/OtherComponent';
import PetInfo from './components/PetInfo';
import RandomNumber from './components/RandomNumber';
import Counter from './components/Counter';
import Button from './components/Button';
import persons from './data/persons';
import Persons from './components/Persons';
import Reset from './components/Reset';

const texts = [
	'click me 1',
	'click me 2',
	'click me 3',
	'click me 4',
	'click me again',
	'click me!!!',
];

function App() {
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

				{/* увеличение счетчика при нажатии на кнопки */}
				<Counter count={count} />
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
				</div>
				{/* кнопка по уроку Udemy, count=0 не отображает - РАЗДЕЛ-19*/}
				<Reset
					count={count}
					onClick={resetCount}
				/>

				{/* кнопка сброса счетчика мой варианат - РАЗДЕЛ-19 */}
				<Button
					onClick={resetCount}
					text={`Reset - My version: ${count}`}
					key={10005}
				/>

				{/* прорисовка массива Persons обобъектов 50 шт.*/}
				<Persons />
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
				<RandomNumber maxNum={1000} />
				<MyComponent />
				<OtherComponent />
				{/* простое использование передачи параметров */}
				<PetInfo
					animal={'dog'}
					age={5}
					hasPet={false}
				/>
				<PetInfo
					animal={'cat'}
					age={10}
					hasPet={true}
				/>
			</header>
		</div>
	);
}

export default App;
