function Reset({ count, onClick }) {
	return (
		<div>
			{count > 0 && (
				<button
					style={{ backgroundColor: 'lightgreen' }}
					onClick={onClick}>
					Reset - Udemy version
				</button>
			)}
		</div>
	);
}

export default Reset;
