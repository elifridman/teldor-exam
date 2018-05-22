import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';
import { Photo } from '../../models/Photo'

@Component({
  selector: 'app-gallery-popup',
  templateUrl: './gallery-popup.component.html',
  styleUrls: ['./gallery-popup.component.css']
})
export class GalleryPopupComponent implements OnInit {

  photos: any;
  searchStr: string = '';
  isPopUpActive = true;


  constructor(private galleryService: GalleryService) { }
  popupStatus(){
    this.isPopUpActive = !this.isPopUpActive;
  }
  ngOnInit() {
    this.galleryService.getPhotos().subscribe((data:any) =>{
      this.photos = data.photos.photo;
    })
  }

}
