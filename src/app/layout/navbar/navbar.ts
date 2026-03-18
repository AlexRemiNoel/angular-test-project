import { Component, inject } from '@angular/core';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatIconModule } from "@angular/material/icon";
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
  .map(r => ({
      icon: r.data?.['icon'] as string,
      path: r.data?.['navigation'] as string,
      title: (r.title as string) ?? '',
    }));


  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }

}
