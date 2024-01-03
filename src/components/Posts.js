import Post from './Post';
import { useEffect } from 'react';
import { useState } from 'react';

function Posts() {
	const [posts, setPosts] = useState(null);
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts/')
			.then((response) => response.json())
			.then((json) => setPosts(json))
			.catch((error) => setError(error.message))
			.finally(() => setIsLoading(false));
	}, []);

	if (error) {
		return <p>Error: {error}</p>;
	}
	return (
		<div>
			<h1>Posts</h1>
			<hr />
			{isLoading ? (
				<h1>Loading</h1>
			) : (
				posts &&
				posts.map((post) => {
					return (
						<Post
							{...post}
							key={post.id}
						/>
					);
				})
			)}
		</div>
	);
}

export default Posts;
