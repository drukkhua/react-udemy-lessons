import Post from './Post';
import { useEffect } from 'react';
import { useState } from 'react';

function Posts() {
	const [posts, setPosts] = useState(null);
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts/')
			.then((response) => response.json())
			.then((json) => setPosts(json))
			.catch((error) => console.log(error.message));
	}, []);

	// console.log(posts);

	return (
		<div>
			{posts &&
				posts.map((post) => {
					return (
						<Post
							{...post}
							key={post.id}
						/>
					);
				})}
		</div>
	);
}

export default Posts;
