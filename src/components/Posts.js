import Post from './Post';
import { useEffect } from 'react';
import { useState } from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com/posts/';

function Posts() {
    const [posts, setPosts] = useState(null);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    useEffect(as() => {
            try {
                const res = await fetch(API_URL);
                const posts = await res.json();
                setPosts(posts);
            } catch (error) {
                setError(error.message);
            }
            setIsLoading(false);
        });
}
	// useEffect(() => {
	// 	fetch(API_URL)
	// 		.then((response) => response.json())
	// 		.then((json) => setPosts(json))
	// 		.catch((error) => setError(error.message))
	// 		.finally(() => setIsLoading(false));
	// }, []);

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
