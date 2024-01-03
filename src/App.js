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
				<Persons />
				{/* {persons.map((person) => {
					return (
						<Person
							person={person}
							key={person.id}
						/>
					);
				})} */}

				<Counter count={count} />

				{texts.map((text, index) => {
					return (
						<Button
							onClick={incrementCount}
							text={text}
							key={index - 100}
						/>
					);
				})}

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

				<RandomNumber maxNum={1000} />
				<MyComponent />
				<OtherComponent />
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
