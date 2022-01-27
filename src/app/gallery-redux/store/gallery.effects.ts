import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {GalleryService} from "../gallery/gallery.service";
import {map, mergeMap} from "rxjs";

@Injectable()
export class GalleryEffects {
  constructor(private action: Actions, private galleryService: GalleryService) {
  };

  loadGallery = createEffect(() =>
    this.action.pipe(
      ofType('[Gallery API] Invoke API'),
      mergeMap(() =>
        this.galleryService.loadGallery()
          .pipe(
            map((data) => ({type: '[Gallery API] Success', allGallery: data}))
          )
      )
    )
  )
}
