import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/ingresar']);
  }

  navigateToSignup() {
    this.router.navigate(['/listar']);
  }
}
