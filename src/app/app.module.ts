import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GalleryService } from './services/gallery.service';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { GalleryPopupComponent } from './components/gallery-popup/gallery-popup.component';
import { ShortenPipePipe } from './pipes/shorten-pipe.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    GalleryPopupComponent,
    ShortenPipePipe,
    FilterPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
