// function PetInfo(props) {
// 	const { animal, age, hasPet } = props;
// 	const text = hasPet
// 		? `My ${animal} is ${age} year old!`
// 		: "I don't have any pet!";
// 	return <h1>{text}</h1>;
// }

function PetInfo(props) {
	const { animal, age, hasPet } = props;
	return hasPet ? (
		<h1>
			My {animal} is {age} year old!
		</h1>
	) : (
		<h2>I don't have any pet!</h2>
	);
}

export default PetInfo;
