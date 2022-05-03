import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Provider } from '../_models/Provider';
import { AppleMusicAuthService } from './apple-music-auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackBar: MatSnackBar,
    private appleAuth: AppleMusicAuthService) { }

  public showNotif(message: string, action = 'error', duration = 4000): void {
    // consider not using zone. However, the snackbar is know not to work outside it.
    // zone is a built in service that allows running async tasks that don't require UI updates.
    // this.zone.run(() => {
    this.snackBar.open(message, action, { duration }).onAction().subscribe(() => {
      console.log('Notififcation action performed');
    });
  }


  public notImplementedWarning(message: string, duration = 4000): void {

    // @ts-ignore
    this.snackBar.open(`"${message}" is not implemented`, 'error', { duration }).onAction().subscribe(() => {
    });
  }

  public handleError(error: any, provider: Provider, action = 'error', duration = 4000): void {
    var message = "There was an issue with the request";
    if (error.status) {
      switch (error.status) {
        case 403:
          message = (provider == Provider.appleMusic) ?
            "Please Connect your Apple Music Account first!" :
            "Please Connect your Spotify Account first!";
          if (provider == Provider.appleMusic) {
            this.appleAuth.unauthorize().then(() => {
              console.log('logged out the apple user');
            }).catch(error => {
              console.log(error);
            });
          }
          break;
        case 404:
          message = (provider == Provider.appleMusic) ?
            "Could not find the given Apple Music Resource!" :
            "Could not find the given playlist! Make sure it's public and the link is valid";
          break;
        case 500:
          message = (provider == Provider.appleMusic) ?
            "There was a problem on Apple's end" :
            "There was a problem on Spotify's end";
        default:
          if (error.error && error.error.message) {
            message = error.error.message ;
          } else if (error.statusText ) {
            message = error.statusText;
          } else if (error.message) {
            message = error.message;
          } else if (error.details) {
            message = error.details;
          }
          break;
      }
    }
    this.snackBar.open(message, action, { duration }).onAction().subscribe(() => {
      console.log('Notififcation action performed');
    });
  }



}