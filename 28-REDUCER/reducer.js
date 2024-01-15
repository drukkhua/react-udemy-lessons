const initialState = [];
// ['Bogdan', 'Alice', 'Mike']
// {
//     type: 'ADD_NAME',
// payload: 'Alice'}

// const actions = [
//     {}
// ]

function reducer(state, action) {
	switch (action.type) {
		case 'CLEAR_NAMES':
			return [];
		case 'ADD_NAME':
			return [...state, action.payload];
		case 'DELELTE_NAME':
			return state.filter((personName) => personName !== action.payload);
		default:
			return state;
	}
	// if (action.type === 'CLEAR_NAMES') {
	// 	return [];
	// }
	// if (action.type === 'ADD_NAME') {
	// 	return [...state, action.payload];
	// }
	// if (action.type === 'DELELTE_NAME') {
	// 	return state.filter((personName) => personName !== action.payload);
	// }
	// return state;
}

let newState = reducer(initialState, {
	type: 'ADD_NAME',
	payload: 'Bogdan',
});

newState = reducer(newState, {
	type: 'ADD_NAME',
	payload: 'Alice',
});
console.log(newState);

newState = reducer(newState, {
	type: 'DELELTE_NAME',
	payload: 'Alice',
});
console.log(newState);

newState = reducer(newState, { type: 'CLEAR_NAMES' });
console.log(newState);

newState = reducer(newState, {
	type: 'ADD_NAME',
	payload: 'Bob',
});
console.log(newState);
