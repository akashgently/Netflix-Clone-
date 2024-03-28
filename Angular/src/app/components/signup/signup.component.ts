import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  signupForm: FormGroup | undefined;
  email: string = '';

  constructor(
    private service: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.signupForm = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', Validators.required, Validators.email],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      { validator: this.passwordMatchValidator }
    );
  }

  private passwordMatchValidator(fg: FormGroup) {
    const password = fg.get('password')?.value;
    const confirmPassword = fg.get('confirmPassword')?.value;
    if (password != confirmPassword) {
      fg.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    } else {
      fg.get('confirmPassword')?.setErrors(null);
    }
  }

  signup() {
    console.log(this.signupForm.value);
    this.service.signup(this.signupForm.value).subscribe(
      (response) => {
        console.log(response);
        this.openPopup('!!', 'Verification email is sent to your E-mail');
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error sending email:', error);
        this.openPopup('!!', 'E-mail is already Existing');
         this.signupForm.reset();
        this.router.navigate(['/signup']);
      }
    );
  }
  openPopup(title: string, message: string): void {
    this.dialog.open(PopupComponent, {
      width: '300px',
      data: { title, message },
    });
  }
  sendEmail() {
    this.service.sendConfirmationEmail(this.email).subscribe(
      () => {
        console.log('Email sent successfully');
      },
      (error) => {
        console.error('Error sending email:', error);
      }
    );
  }
}
