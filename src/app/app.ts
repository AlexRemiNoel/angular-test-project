import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePage } from "./features/user/pages/home-page/home-page";
import { MatDrawerContainer, MatSidenavContent, MatSidenavContainer } from "@angular/material/sidenav";
import { Navbar } from "./features/user/components/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomePage, Navbar, MatSidenavContent, MatSidenavContainer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('InventorySystemWebApp');
}
