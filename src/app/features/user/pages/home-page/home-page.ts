import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSidenavContent, MatSidenavContainer, MatSidenav, MatDrawerMode, MatDrawerContainer } from "@angular/material/sidenav";

@Component({
  selector: 'app-home-page',
  imports: [MatSidenavContent, MatSidenavContainer, MatSidenav],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  mode = new FormControl('over' as MatDrawerMode);
  hasBackdrop = new FormControl(null as null | boolean);
  position = new FormControl('start' as 'start' | 'end');
}
