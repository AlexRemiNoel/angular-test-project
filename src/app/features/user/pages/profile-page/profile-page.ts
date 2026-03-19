import { Component } from '@angular/core';
import { Navbar } from "../../../../layout/navbar/navbar";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-profile-page',
  imports: [Navbar, MatIcon],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.css',
})
export class ProfilePage {}
