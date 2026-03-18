import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";

@Component({
  selector: 'app-identities-page',
  imports: [Navbar],
  templateUrl: './identities-page.html',
  styleUrl: './identities-page.css',
})
export class IdentitiesPage {
sidenav: any;
}
