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
  username: string;
  password: string;

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
    this.submitted = true;


    this.loading = true;
    this.authService.login(this.username, this.password)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['']);

          this.notifService.showNotif('Logged in as: ' + this.username, 'confirmation');
        },
        error => {
          this.loading = false;
          // show a snackbar to user
          this.notifService.showNotif(error['error']['message'], 'dismiss');
          console.log('Error', error);
        });
  }
}
