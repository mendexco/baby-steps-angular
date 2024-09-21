import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-name-input',
  standalone: true,
  templateUrl: './name-input.component.html',
  styleUrl: './name-input.component.scss',
})
export class NameInputComponent {
  @Input() name?: string = '';


  @Output() onNameInputKeyUp = new EventEmitter<string>();

  handleKeyUp(value: string) {
    console.log(`keyup event: ${value}`);
    this.onNameInputKeyUp.emit(value);
  }
}
