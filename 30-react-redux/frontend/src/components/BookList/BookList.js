import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs';
import './BookList.css';
import { deleteBook, toggleFavorite } from '../../redux/books/actionCreators';
import {
	selectTitleFilter,
	selectAuthorFilter,
} from '../../redux/slices/filterSlice';

function BookList() {
	const books = useSelector((state) => state.books);
	const titleFilter = useSelector(selectTitleFilter);
	const authorFilter = useSelector(selectAuthorFilter);
	const dispatch = useDispatch();
	// фильтр книг содержащих title в поле Filter, '' => вернет всегда true
	const filteredBooks = books.filter((book) => {
		const matchesTitle = book.title
			.toLowerCase()
			.includes(titleFilter.toLowerCase());
		const matchesAuthor = book.author
			.toLowerCase()
			.includes(authorFilter.toLowerCase());
		return matchesTitle && matchesAuthor;
	});
	const handleDeleteBook = (id) => {
		dispatch(deleteBook(id));
	};

	const handleToggleBook = (id) => {
		dispatch(toggleFavorite(id));
	};

	return (
		<div className="app-block book-list">
			<h2>Book List</h2>
			{books.length === 0 ? (
				<p>No books avaible</p>
			) : (
				<ul>
					{filteredBooks.map((book, i) => (
						<li key={book.id}>
							<div className="book-info">
								{++i}. "{book.title}" by <strong>{book.author}</strong>
							</div>
							<div className="book-actions">
								<span onClick={() => handleToggleBook(book.id)}>
									{book.isFavorite ? (
										<BsBookmarkStarFill className="star-icon" />
									) : (
										<BsBookmarkStar className="star-icon" />
									)}
								</span>
								<button onClick={() => handleDeleteBook(book.id)}>
									Delete
								</button>
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default BookList;
