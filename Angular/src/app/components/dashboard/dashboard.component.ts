import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  user: AppComponent = new AppComponent();
  submitted = false;
  userForm: FormGroup;
  name: string = '';
  relation: string = '';

  message: String;
  users = { firstName: '', relation: '' };

  constructor(
    private service: AuthService,
    private router: Router,
    private http: HttpClient,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      name: [''],
      relation: [''],
    });
  }

  enter() {
    console.log(this.userForm.value);
    this.service.create(this.userForm.value).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/data-display'], {
          state: { formData: this.userForm.value },
        });
      },
      (error) => {
        console.error(error);
        this.router.navigate(['/users']);
      }
    );
  }
}

//   enter() {
//   console.log(this.userForm.value);
//   this.service.create(this.userForm.value).subscribe(
//     (response) => {
//       console.log(response);
//       const formDataArray = Object.keys(this.userForm.value).map(key => ({
//         name: key,
//         relation: this.userForm.value[key]
//       }));
//       this.router.navigate(['/data-display'], {
//         state: { formData: formDataArray }
//       });
//     },
//     (error) => {
//       console.error(error);
//       this.router.navigate(['/users']);
//     }
//   );
// }
// }

  // onSubmit() {
  //   this.http.post<any>('http://localhost:8080/users', this.users).subscribe(
  //     (data) => {
  //       console.log(data);
  //       this.router.navigate(['/']);
  //     },
  //     (error) => console.log(error)
  //   );
  // }



  // this.hello();
  // }

  // hello() {
  //   this.service.hello().subscribe((response) => {
  //     console.log(response);
  //     this.message = response.message;
  //   });
  // }
  // login() {
  //   console.log(this.dashboardForm.value);
  //   this.service.log(this.dashboardForm.value).subscribe((response) => {
  //     console.log(response);
  //     if (response.jwtToken) {
  //       alert(response.jwtToken);
  //     const jwtToken = response.jwtToken;
  //     localStorage.setItem('JWT', jwtToken);
  //     this.router.navigateByUrl('/dashboard');
  //     }
  //   });
  // }
