import { ActionTypes } from "../Contants/Action-types"
const initialState={
    gallerys:[]
}
export const galleryReducer=(state=initialState, {type,payload})=>{
     switch(type){
        case ActionTypes.SET_GALLERY:
            return {...state,gallerys:payload};
        default:
            return state;

     }
}