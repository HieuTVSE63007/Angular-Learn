import {GalleryModel} from "../gallery/gallery.model";
import {createReducer, on} from "@ngrx/store";
import {retrievedGallery} from "./gallery.actions";

export const initialState: GalleryModel[] = [];

const _galleryReducer = createReducer(
  initialState,
  on(retrievedGallery, (state, {allGallery}) => {
    return[...allGallery]
  })
)

export function galleryReducers(state: any, action: any){
  return _galleryReducer(state,action);
}
