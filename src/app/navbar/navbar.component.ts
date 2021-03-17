import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    userFullName: string;
    userPosition: string;

    constructor(private authService: AuthService) {
        if (this.authService.isAuthenticated()) {
            this.authService.getUser().then(user => {
                this.userFullName = user.profile.name;
            });
        }

        this.userPosition = 'Admin';
    }

    ngOnInit(): void {

    }

    menuItemClick(): void {
        $('.metismenu').metisMenu();
    }

}
