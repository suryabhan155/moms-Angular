import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User, UserManager} from 'oidc-client';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    public user: User;
    private userManager: UserManager;
    private userManagementUri = environment.UserManagementUri;

    constructor(private http: HttpClient) {
        this.userManager = new UserManager({
            authority: environment.authority,
            client_id: environment.clientId,
            redirect_uri: environment.redirectUri,
            response_type: environment.responseType,
            scope: environment.scope,
            post_logout_redirect_uri: environment.redirectUri
        });
    }

    login(): any {
        return this.userManager.signinRedirect();
    }

    async completeAuthentication(): Promise<void> {
        this.user = await this.userManager.signinRedirectCallback();
    }

    isAuthenticated(): boolean {
        return this.user != null && !this.user.expired;
    }

    signout(): void {
        this.userManager.signoutRedirect();
    }

    getUser(): Promise<User> {
        return this.userManager.getUser();
    }

    loadUserClaims(): Observable<any> {
        return this.http.get<any[]>(this.userManagementUri + '/api/Users/GetRoleClaims/' + this.user.profile.sub).pipe(
            map(result => result.map(obj => {
                const claims: any[] =  JSON.parse(obj.claimValue);
            }))
        );
    }
}
