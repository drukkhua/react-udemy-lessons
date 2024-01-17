import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import './BookForm.css';
import { addBook } from '../../redux/books/actionCreators';
import booksData from '../../data/books.json';

function BookForm() {
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const dispatch = useDispatch();

	const handleAddRandomBook = () => {
		const randomIndex = Math.floor(Math.random() * booksData.length);
		const randomBook = booksData[randomIndex];
		const randomBookWithId = {
			...randomBook,
			id: uuidv4(),
			isFavorite: false,
		};
		dispatch(addBook(randomBookWithId));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (title && author) {
			const newBook = { title, author, id: uuidv4(), isFavorite: false };
			dispatch(addBook(newBook));
			setTitle('');
			setAuthor('');
		}
	};

	return (
		<div className="app-block book-form">
			<h2>Add a New Book</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="title">Title: </label>
					<input
						type="text"
						id="title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="author">Author: </label>
					<input
						type="text"
						id="author"
						value={author}
						onChange={(e) => setAuthor(e.target.value)}
					/>
				</div>
				<button type="submit">Add book</button>
				<button
					type="button"
					onClick={handleAddRandomBook}>
					Add Random
				</button>
			</form>
		</div>
	);
}

export default BookForm;
