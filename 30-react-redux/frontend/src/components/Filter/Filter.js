import './Filter.css';
import {
	setTitleFilter,
	selectTitleFilter,
	resetFilters,
	setAuthorFilter,
	selectAuthorFilter,
} from '../../redux/slices/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

function Filter() {
	const dispatch = useDispatch();
	//titleFilter возьмет текущее значение title из redux.store
	const titleFilter = useSelector(selectTitleFilter);
	const authorFilter = useSelector(selectAuthorFilter);
	// фильтр по Title
	const handleTitleFilterChange = (e) => {
		// отправит значение input в redux.store используя dispatch
		const filterTitle = e.target.value;
		dispatch(setTitleFilter(filterTitle));
	};
	// фильтр по Author
	const handleAuthorFilterChange = (e) => {
		const filterAuthor = e.target.value;
		dispatch(setAuthorFilter(filterAuthor));
	};

	const handleResetFilters = () => {
		dispatch(resetFilters());
	};

	return (
		<div className="app-block filter">
			{/* Секция фильтра по title */}
			<div className="filter-row">
				{/* <label htmlFor="title">Filter by title: </label> */}
				<div className="filter-group">
					<input
						type="text"
						placeholder="Filter by Title..."
						value={titleFilter}
						onChange={handleTitleFilterChange}
					/>
				</div>
				<div className="filter-group">
					<input
						type="text"
						placeholder="Filter by Author..."
						value={authorFilter}
						onChange={handleAuthorFilterChange}
					/>
				</div>
				<button
					type="button"
					onClick={handleResetFilters}>
					Reset Filters
				</button>
			</div>
		</div>
	);
}

export default Filter;
