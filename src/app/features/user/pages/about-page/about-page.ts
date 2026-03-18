import { Component } from '@angular/core';
import { Navbar } from "../../../../layout/navbar/navbar";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-about-page',
  imports: [Navbar],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
})
export class AboutPage {}
