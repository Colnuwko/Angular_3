import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  date = new Date().toDateString();
  constructor(private router: Router) { }
  goToMain(): void {
    this.router.navigateByUrl('/');
  }

}
