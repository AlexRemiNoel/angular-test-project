import { Component } from '@angular/core';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  imports: [MatSidenavContainer, MatSidenav],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
hasBackdrop: any;
mode: any;
position: any;
}
