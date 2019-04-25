import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movies/movies'

/**
 * Generated class for the MoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class MoviesPage {
  movies: any[]=[];


  constructor(public navCtrl: NavController, public navParams: NavParams, private mp:MovieProvider) {
  }

  ionViewDidLoad(){
    this.mp.getMovies().subscribe(data =>
    {
    this.movies = data.Search;
    });
    }
  }
