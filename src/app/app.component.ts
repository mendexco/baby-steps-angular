import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import MainPageComponent from '@features/pages/main';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainPageComponent],
  template: `
    <app-main-page />
    <router-outlet />
  `,
})
export class AppComponent {}
