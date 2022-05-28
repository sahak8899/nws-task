import {CATEGORIES_URL, IMAGES_URL} from '../helpers/constants/index';
import {getAllCats, getCategories, getCats} from "../store/actionCreators/app";
import { toast } from 'react-toastify';
import store from '../store';
import axios from 'axios';

const AppController = {};

AppController.getCategoriesData = async () => {
    await axios.get(CATEGORIES_URL)
    .then(res => store.dispatch(getCategories(res))
    .catch(err => 
        //must be error message
        toast.error("Something went wrong", {
            position: toast.POSITION.TOP_RIGHT
          })
        ))
}
AppController.getAllCatsData = async (page=1, limit=10 ) => {
    const params = {
        page,
        limit
    }
    await axios.get(IMAGES_URL, {params})
    .then(res => store.dispatch(getAllCats(res))
    .catch(err => 
        //must be error message
        toast.error("Something went wrong", {
            position: toast.POSITION.TOP_RIGHT
          })
        ))
}
AppController.getCatsWithCategory = async (page=1, limit=10, catId ) => {
    const params = {
        page,
        limit,
        category_ids: catId
    }
    await axios.get(IMAGES_URL, {params})
    .then(res => store.dispatch(getCats(res))
    .catch(err => 
        //must be error message
        toast.error("Something went wrong", {
            position: toast.POSITION.TOP_RIGHT
          })
        ))
}

export default AppController;