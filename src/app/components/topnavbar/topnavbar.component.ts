import { Component } from '@angular/core';
import {smoothlyMenu} from "../../app.helpers";

@Component({
    selector: 'topnavbar',
    templateUrl: 'topnavbar.component.html'
})
export class Topnavbar {
    ngOnInit() {

    }
    toggleNavigation(): void {
        jQuery("body").toggleClass("mini-navbar");
        smoothlyMenu();
    }
    logout() {
        localStorage.clear();
        //log out to home page
        location.href='http://www.google.com';
    }
}