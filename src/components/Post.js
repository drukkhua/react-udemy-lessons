function Post(props) {
	const { id, userId, title, body } = props;
	return (
		<div className="cards">
			<small>{id}</small>
			<h2>{title}</h2>
			<p>{body}</p>
			<h3>userId: {userId}</h3>
		</div>
	);
}

export default Post;
