import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

    constructor(private authService: AuthService) { }

    initApp(): Promise<any> {
        return new Promise<any>(async (resolve, reject) => {
            if (!this.authService.isAuthenticated()) {
                const val = window.location.href.indexOf('id_token');
                if (val >= 0) {
                    await this.authService.completeAuthentication();
                    this.authService.getUser().then(user => {
                        // this.authService.loadUserClaims().subscribe();
                    });

                    setTimeout( () => {
                        resolve();
                    }, 500);
                } else if (window.location.href.indexOf('error') >= 0) {
                    reject();
                } else {
                    // resolve();
                    return this.authService.login();
                }
            }
        });
    }
}
