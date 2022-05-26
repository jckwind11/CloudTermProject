import { Component, OnInit } from '@angular/core';
import { AppleMusicAuthService } from '../_services/apple-music-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {


  constructor(public appleAuth: AppleMusicAuthService, private router: Router) { }

  ngOnInit(): void {
  }
  
  async authorize() {
    await this.appleAuth.authorize();
    this.router.navigate(['']);
  }

  async unauthorize() {
    await this.appleAuth.unauthorize();
  }

}
