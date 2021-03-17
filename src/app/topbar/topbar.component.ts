import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
declare var $: any;

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
    constructor(private authService: AuthService) { }

    ngOnInit(): void {}

    signOut(): void {
        if (this.authService.isAuthenticated()) {
            this.authService.signout();
        }
    }

    navbarMinimize(): void {
        $('body').toggleClass('mini-navbar');
        this.SmoothlyMenu();
    }

    SmoothlyMenu(): void {
        if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
            // Hide menu in order to smoothly turn on when maximize menu
            $('#side-menu').hide();
            // For smoothly turn on menu
            setTimeout( () => {
                $('#side-menu').fadeIn(400);
            }, 200);
        } else if ($('body').hasClass('fixed-sidebar')) {
            $('#side-menu').hide();
            setTimeout( () => {
                $('#side-menu').fadeIn(400);
            }, 100);
        } else {
            // Remove all inline style from jquery fadeIn function to reset menu state
            $('#side-menu').removeAttr('style');
        }
    }
}
