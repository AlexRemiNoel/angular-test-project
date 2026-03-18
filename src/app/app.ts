import { Component, signal } from '@angular/core';
import { HomePage } from "./features/user/pages/home-page/home-page";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('InventorySystemWebApp');
}
