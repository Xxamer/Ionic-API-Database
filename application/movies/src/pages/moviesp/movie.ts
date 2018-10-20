import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, ToastController } from 'ionic-angular';
import { MovieService } from '../../providers/movie-service';
import { MovieModalPage } from './movie-modal';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the MoviePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie',
  templateUrl: 'movies.html',
})
export class MoviePage {
  private movies: Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public MovieService: MovieService, public modalCtrl: ModalController, public toastCtrl: ToastController, private alertCtrl: AlertController) {
  }

  ionViewWillEnter() {
    this.MovieService.getMovies().subscribe(movies => {
      this.movies = movies;
    })
  }
  openModal(movieId) {
    let modal = this.modalCtrl.create(MovieModalPage, movieId);
    modal.present();
    // refresh data after modal dismissed
    modal.onDidDismiss(() => this.ionViewWillEnter())
  }

  remove(movie) {
    this.MovieService.remove(movie.id).subscribe(response => {
      for (let i = 0; i < this.movies.length; i++) {
        if (this.movies[i] === movie) {
          this.movies.splice(i, 1);
          let toast = this.toastCtrl.create({
            message: 'movie' + movie.name + 'deleted'
          });
          toast.present;
        }
      }
    })
  }
  Popup(movie) {
    let alert = this.alertCtrl.create({
      title: 'Delete',
      message: 'Do you want to DELETE THIS ENTRY? REALLY? ARE YOU SURE?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'DELETE, BE CAREFUL',
          role: "remove",
          handler: () => {
            this.remove(movie)
          }
        }
      ]
    });
    alert.present();
  }
}
