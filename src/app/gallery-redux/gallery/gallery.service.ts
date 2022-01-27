import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {map} from "rxjs";

@Injectable()
export class GalleryService{
  constructor(private http: HttpClient) {
  }

  loadGallery(){
    return this.http.get("https://jsonplaceholder.typicode.com/photos")
      .pipe(map((data) => data|| []));
  }
}
