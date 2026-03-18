import { Component, inject } from '@angular/core';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { RouterLink, RouterOutlet, RouterLinkActive, Router } from "@angular/router";
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-navbar',
  imports: [MatListModule, MatSidenav, MatIconModule, MatTooltipModule, MatSidenavContainer, MatSidenavContent, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isExpanded = false;
  private router = inject(Router);

  routes = this.router.config
  .filter(r => r.data?.['icon'])
  .map(r => ({
      path: r.path ?? '/',
      icon: r.data?.['icon'] as string,
      title: (r.title as string) ?? '',
    }));


  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }

}
