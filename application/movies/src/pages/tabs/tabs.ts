import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { MoviePage } from '../moviesp/movie';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MoviePage;
  tab3Root = AboutPage;
  color: string = "primary";

  constructor() {

  }
}

