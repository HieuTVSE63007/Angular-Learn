import {AppState} from "./app.state";
import {createSelector} from "@ngrx/store";
import {GalleryModel} from "../gallery/gallery.model";

export const galleryRootSelector = (state:AppState) => state.gallery

export const uniqueAlbumIds = createSelector(
  galleryRootSelector,
  (gallery:GalleryModel[]) => {
    return [...new Set(gallery.map(i => i.albumId))];
  }
)
