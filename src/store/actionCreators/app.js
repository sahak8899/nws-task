import { GET_ALL_CATS, GET_CATEGORIES , GET_CATS} from '../actionTypes/app';

export const getCategories = (payload) => ({
	type: GET_CATEGORIES,
	payload
});
export const getAllCats = (payload) => ({
	type: GET_ALL_CATS,
	payload
});
export const getCats = (payload) => ({
	type: GET_CATS,
	payload
});
