import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.scss'],
})
export class DataDisplayComponent implements OnInit {
  formDataList: any[] = [];

  constructor(private service: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loadDataFromDatabase();
  }

  loadDataFromDatabase() {
    this.service.fetchFormData().subscribe(
      (data: any[]) => {
        this.formDataList = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
  handleButtonClick() {
    this.router.navigate(['/dashboard']);
  }
  handleButtonClicked(){
     this.router.navigate(['/movie-display']);
  }
}
