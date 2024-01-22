import './Filter.css';
import {
	setTitleFilter,
	selectTitleFilter,
	resetFilters,
} from '../../redux/slices/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

function Filter() {
	const dispatch = useDispatch();
	//titleFilter возьмет текущее значение title из redux.store
	const titleFilter = useSelector(selectTitleFilter);
	const handleTitleFilterChange = (e) => {
		// отправит значение input в redux.store используя dispatch
		const filterTitle = e.target.value;
		dispatch(setTitleFilter(filterTitle));
	};

	const handleResetFilters = () => {
		dispatch(resetFilters());
	};

	return (
		<div className="app-block filter">
			<div className="filter-row">
				<label htmlFor="title">Filter by title: </label>
				<div className="filter-group">
					<input
						type="text"
						placeholder="Filter by title..."
						value={titleFilter}
						onChange={handleTitleFilterChange}
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
