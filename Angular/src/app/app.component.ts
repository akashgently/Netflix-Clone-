import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular-Authentication';
  id: number;
  name:string;
  language: string;
  genre: string;
  category: string;
  link: string;
  movie:string;
  // myimage:string="assets/images/movie.jpg";
}
