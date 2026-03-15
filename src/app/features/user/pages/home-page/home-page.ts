import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSidenavContent, MatSidenavContainer, MatSidenav, MatDrawerMode, MatDrawerContainer } from "@angular/material/sidenav";
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterOutlet } from "@angular/router";
import { MatTooltipModule } from '@angular/material/tooltip';
import { Navbar } from "../../components/navbar/navbar";

@Component({
  selector: 'app-home-page',
  imports: [MatListModule, MatIconModule, MatTooltipModule, Navbar],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  isExpanded = false;

  navItems = [
    {id:1, icon: 'home', label: 'home', route: '/' },
    {id:2, icon: 'person', label: 'identities',  route: '/identities' },
    {id:3, icon: 'settings', label: 'about', route: '/about' },
  ];

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }
}
