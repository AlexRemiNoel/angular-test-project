import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePage } from "./features/user/pages/home-page/home-page";
import { MatDrawerContainer } from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomePage, MatDrawerContainer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('InventorySystemWebApp');
}
