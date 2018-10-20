import { MovieService } from '../../providers/movie-service';
import { Component, ViewChild } from '@angular/core';
import { NavParams, ViewController, ToastController, NavController, ModalController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
//import { MoviePage } from './movie';
@Component({
  templateUrl: './movie-modal.html'
})
export class MovieModalPage {
  @ViewChild('name') name;
  @ViewChild('description') description;
  @ViewChild('release_date') release_date;
  @ViewChild('genre') genre;
  movie: any = { };
  error: any;

  constructor(public MovieService: MovieService,
    public params: NavParams,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController,
    public navCtrl: NavController,
    public modalCtrl: ModalController) {
    if (this.params.data.id) {
      this.MovieService.get(this.params.get('id')).subscribe((movie: any) => {
        this.movie = movie;
        movie.href = movie._links.self.href;
      });
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
    //let modal = this.modalCtrl.create(MoviePage);
  }

  save(form: NgForm) {
    let update: boolean = form['href'];
    this.MovieService.save(form).subscribe(result => {
      let toast = this.toastCtrl.create({
        message: 'Movie "' + form.name + '" ' + ((update) ? 'updated' : 'added') + '.',
        duration: 2000
      });
      toast.present();
      this.dismiss();
    }, error => this.error = "Ha ocurrido un error")
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.name.setFocus();
      this.description.setFocus();
      this.genre.setFocus();
      this.release_date.setFocus();
    }, 150);
  }
}
