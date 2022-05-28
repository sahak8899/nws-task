import { GET_CATEGORIES, GET_CATS, GET_ALL_CATS } from '../actionTypes/app';

const initialState = {
	categories: [],
    allCats: [],
	cats: [],
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_CATEGORIES: {
			return {
				...state,
				categories: payload.data
			};
		}
		case GET_CATS: {
			return {
				...state,
				cats: [...state.cats, ...payload.data]
			};
		}
		case GET_ALL_CATS: {
			return {
				...state,
				allCats: [...state.allCats, ...payload.data]
			};
		}
		default:
			return state;
	}
};