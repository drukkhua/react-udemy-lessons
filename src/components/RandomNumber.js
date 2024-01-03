import { useState } from 'react';
import generateRandomNum from './utils/generateRandomNum';

function RandomNumber({ maxNum }) {
	// const maxNum = props.maxNum;
	const num = generateRandomNum(maxNum);
	const [randomNum, setRandomNum] = useState(num);
	const changeRandomNum = () => {
		setRandomNum(generateRandomNum(maxNum));
	};

	return (
		<div>
			<h1>{randomNum}</h1>
			<button onClick={changeRandomNum}>Generate new random number</button>
		</div>
	);
}

export default RandomNumber;
