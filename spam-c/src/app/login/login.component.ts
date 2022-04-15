import { Component, OnInit } from '@angular/core';

import { first } from 'rxjs/operators';

import {AuthService} from '../_services/auth.service';
import {Router} from '@angular/router';
import {NotificationService} from '../_services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;
  submitted = false;
  error = '';
  username: string = 'admin';
  password: string = '123123';

  constructor(
   // private formBuilder: FormBuilder,
     private router: Router,
     private authService: AuthService,
     private notifService: NotificationService
  ) {
    // redirect to home if already logged in
    if (this.authService.currentUserValue) {
     this.router.navigate(['/home']);
    }
  }

  ngOnInit(): void {
  }

  login() {
    this.loading = true;
    this.authService.login(this.username, this.password)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/home']);

          this.notifService.showNotif('Logged in as: ' + this.username, 'confirmation');
        },
        error => {
          this.error = error;
          this.loading = false;
          // show a snackbar to user
          this.notifService.showNotif(this.error, 'dismiss');
          console.log('Error', error);
        });
  }
}
