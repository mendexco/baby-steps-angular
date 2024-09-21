import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pill',
  standalone: true,
  templateUrl: './pill.component.html',
  styleUrl: './pill.component.scss',
})
export class PillComponent {
  @Input({ required: true }) title!: string;
  @Input() link?: string;

  handleRedirect() {
    if (this.link) window.open(this.link, '_blank');
  }
}
