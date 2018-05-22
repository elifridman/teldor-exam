import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Photo } from '../models/Photo';

@Injectable()
export class GalleryService {

  private API_KEY = "b3b6ad792888e10eaf2ea908a7517c3e";
  private baseUrl = "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key="+this.API_KEY+"&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1";
  constructor(private httpClient: HttpClient) { }

  getPhotos(){
    return this.httpClient.get(this.baseUrl)

  }

}
