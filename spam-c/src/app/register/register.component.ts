import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NotificationService } from '../_services/notification.service';
import { first } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  loading = false;
  submitted = false;
  error = '';

  providers = [
    { name: 'Spotify' },
    { name: 'Apple Music' }
  ];

  constructor(
    // private patternValidator: PatternValidator,
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private notifService: NotificationService
  ) {
    // redirect to home if already logged in
    if (this.authService.currentUserValue) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      favoritePlatform: [''],
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      console.log('Error in onSubmit()');
      return;
    }

    this.loading = true;
    this.userService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          //  this.alertService.success('Registration successful', true);
          this.notifService.showNotif('Logged in as: ' + this.f.username.value, 'confirmation');
          this.router.navigate(['/home']);
        },
        error => {
          console.log(error);
          this.notifService.showNotif(error['error']['message'], 'dismiss');
          this.loading = false;
        });
  }
}
