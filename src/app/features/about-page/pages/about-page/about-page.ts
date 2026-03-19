import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { Navbar } from '../../../../layout/navbar/navbar';

@Component({
  selector: 'app-about-page',
  imports: [Navbar],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
})
export class AboutPage {}
