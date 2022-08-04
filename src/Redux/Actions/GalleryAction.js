import { ActionTypes } from "../Contants/Action-types"
export const setgallery=(gallerys)=>{
    return {
        type:ActionTypes.SET_GALLERY,
        payload:gallerys,
    };
};

export const selectgallery=(gallery)=>{
    return {
        type:ActionTypes.SELECTED_GALLERY,
        payload:gallery,
    };
};