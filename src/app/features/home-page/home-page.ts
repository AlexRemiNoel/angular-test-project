import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Navbar } from "../../../../layout/navbar/navbar";

@Component({
  selector: 'app-home-page',
  imports: [MatListModule, MatIconModule, MatTooltipModule, Navbar],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
}
