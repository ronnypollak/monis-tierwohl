import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  dropdownOpen = false;
  mobileMenuOpen = false;

  constructor(private router: Router) {}

  openDropdown(): void {
    this.dropdownOpen = true;
  }

  closeDropdown(): void {
    this.dropdownOpen = false;
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

  isRouteActive(route: string): boolean {
    return this.router.url.includes(route);
  }
}
