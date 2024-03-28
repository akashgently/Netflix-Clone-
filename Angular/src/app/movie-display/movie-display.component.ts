import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MockDataServiceService } from '../service/mock-data-service.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-movie-display',
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.scss'],
})
export class MovieDisplayComponent {
  mockData: any[];

  constructor(
    private router: Router,
    private mockDataService: MockDataServiceService
  ) {}

  ngOnInit() {
    this.mockData = this.mockDataService.getMockData();
  }

  searchTerm: string = '';
  filter1: string = '';
  filter2: string = '';
  filter3: string = '';

  // @Output() searchEvent = new EventEmitter<{
  //   term: string;
  //   filters: string[];
  // }>();

  search() {
    this.router.navigate(['/search-results']);
  }
}
