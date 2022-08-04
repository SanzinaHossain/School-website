import {combineReducers} from "redux";
import { galleryReducer } from "./galleryReducer";

 export const reducers = combineReducers({
    allGallery:galleryReducer
})
export default reducers;