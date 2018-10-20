import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoviePage } from './movie';
import { MovieService } from '../../providers/movie-service';
import { MovieModalPage } from './movie-modal';

@NgModule({
  declarations: [
    MoviePage,
    MovieModalPage
  ],
  imports: [
    IonicPageModule.forChild(MoviePage),
  ],
  providers: [
    MovieService
  ],
  entryComponents: [
    MovieModalPage
  ]
})
export class MoviePageModule {}
