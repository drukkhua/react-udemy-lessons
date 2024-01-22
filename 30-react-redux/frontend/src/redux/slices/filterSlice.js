import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	title: '',
	// author: '',
	// onlyFavorite: false,
};

const filterSlice = createSlice({
	name: 'filter', // это название пойдет в поле type: filterSlice.actions.setTitleFilter()
	initialState,
	reducers: {
		setTitleFilter: (state, action) => {
			// filterSlice.actions.setTitleFilter('test') -> передаст payload 'test'
			// вернет объект payload: "test", type: "filter/setFilter"
			// мутируем state и ничего не возвращаем (immer библиотека формирует сама новый объект)
			state.title = action.payload;
			// You can also retur new state  as usually
			// return { ...state, title: action.payload };
		},
		resetFilters: (state) => {
			return initialState;
		},
	},
});
export const { setTitleFilter, resetFilters } = filterSlice.actions;
// const setTitleFilter = filterSlice.actions.setTitleFilter.setTitleFilter;  => аналог строки выше
//selectTitleFilter -> возьмет в состоянии redux.store текущее значение filter.title
export const selectTitleFilter = (state) => state.filter.title;
export default filterSlice.reducer;
