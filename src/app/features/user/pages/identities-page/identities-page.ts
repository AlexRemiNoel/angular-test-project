import { Component } from '@angular/core';
import { MatSidenavContent } from "@angular/material/sidenav";

@Component({
  selector: 'app-identities-page',
  imports: [MatSidenavContent],
  templateUrl: './identities-page.html',
  styleUrl: './identities-page.css',
})
export class IdentitiesPage {
sidenav: any;
}
