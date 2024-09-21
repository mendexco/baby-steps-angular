import { Component, Input } from '@angular/core';

@Component({
  selector: 'svg-icon-angular',
  standalone: true,
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.scss',
})
export class AngularSvgIconComponent {
  @Input() customClass?: string;
}
