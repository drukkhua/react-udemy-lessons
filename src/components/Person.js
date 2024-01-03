function Person({ person }) {
	return (
		<div className="card">
			<img
				src={person.image}
				alt={person.firstName}
			/>
			<h3>
				{person.id}. {person.firstName} {person.lastName}
			</h3>
			<p>{person.email}</p>
		</div>
	);
}

export default Person;
