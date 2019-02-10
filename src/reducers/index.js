import {combineReducers} from "redux";
import apiReducer from 'apiReducer';
import carouselReducer from 'carouselReducer';

export default combineReducers({
    carousel: carouselReducer,
    api: apiReducer,
});
