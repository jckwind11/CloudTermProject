import { Component, OnInit } from '@angular/core';
import { AppleMusicAuthService } from '../_services/apple-music-auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(public appleAuth: AppleMusicAuthService) { }

  ngOnInit(): void {
  }
  
  async authorize() {
    await this.appleAuth.authorize();
  }

  async unauthorize() {
    await this.appleAuth.unauthorize();
  }

  // authorize(): void {
  //   from( this.musicKit.authorize() ).subscribe( () => {
  //     this.isAuthorized = true;
  //   });
  // }

  // unauthorize(): void {
  //   from( this.musicKit.unauthorize() ).subscribe( () => {
  //     this.isAuthorized = false;
  //   });
  // }
}
