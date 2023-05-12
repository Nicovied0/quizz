import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent {
  constructor(private router: Router) { }

  goExercise() {
    let min: number = 1;
    let max: number = 3;
    let randomNumber: number = Math.floor(Math.random() * (max - min + 1)) + min;

    if (localStorage.getItem('randomNumber')) {
      randomNumber = parseInt(localStorage.getItem('randomNumber') || '1');
    } else {
      localStorage.setItem('randomNumber', randomNumber.toString());
      this.scheduleLocalStorageCleanup();
    }

    this.router.navigate([`/ejercicio${randomNumber}`]);
  }

  scheduleLocalStorageCleanup() {
    const timeDiffMs = this.getTimeDifferenceUntilNextMidnightInArgentina();
    // console.log(timeDiffMs)
    setTimeout(() => {
      localStorage.removeItem('randomNumber');
    }, timeDiffMs);
  }

  getTimeDifferenceUntilNextMidnightInArgentina() {
    const now = new Date();
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
    const argentinaTime = utcTime + (3 * 60 * 60 * 1000);
    const midnightArgentina = new Date(argentinaTime);
    midnightArgentina.setHours(24, 0, 0, 0);
    const timeDiffMs = midnightArgentina.getTime() - argentinaTime;
    return timeDiffMs;
  }
}
