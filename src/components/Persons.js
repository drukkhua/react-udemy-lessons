import Person from './Person';
import persons from '../data/persons';

function Persons() {
	return (
		<div className="cards">
			{persons.map((person) => {
				return (
					<Person
						person={person}
						key={person.id}
					/>
				);
			})}
		</div>
	);
}

export default Persons;
