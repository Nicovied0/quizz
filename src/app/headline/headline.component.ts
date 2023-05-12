import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent {

  constructor(private router: Router) { }

  goHome() {
    this.router.navigate(['/'])
  }
  goExericice1() {
    this.router.navigate(['/ejercicio1'])
  }
  goExericice2() {
    this.router.navigate(['/ejercicio2'])
  }
}
