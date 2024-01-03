// 23 Раздел, свойства children
function Wrapper(props) {
	console.log(props);
	const style = {
		backgroundColor: props.color,
		padding: '15px',
		margin: '15px auto',
		width: '450px',
	};

	return (
		<div style={style}>
			<h1>Hellow from wrapper!</h1>
			{props.children}
		</div>
	);
}

export default Wrapper;
