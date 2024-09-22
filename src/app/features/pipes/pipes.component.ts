import {
  CurrencyPipe,
  DatePipe,
  LowerCasePipe,
  NgStyle,
  PercentPipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';

type GroupData = {
  id: string;
  name: string;
  src: string;
};

@Component({
  selector: 'app-pipes',
  standalone: true,
  templateUrl: './pipes.component.html',
  imports: [
    NgStyle,
    DatePipe,
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    CurrencyPipe,
    PercentPipe,
  ],
})
export class PipesComponent {
  date = new Date(2024, 0, 31);
  text = 'Baby steps ANGULAR';
  number = 12.345;
}
