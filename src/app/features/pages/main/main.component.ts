import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import PillComponent from '@components/pill';
import { SOCIAL_DATA } from '@constants';
import GroupComponent from '@features/group';
import AngularSvgIconComponent from '@icons/angular';
import NameInputComponent from './title-input';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    AngularSvgIconComponent,
    PillComponent,
    NameInputComponent,
    NgIf,
    GroupComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainPageComponent {
  name = 'wonderful person who is running this';
  pills = SOCIAL_DATA;

  handleChangeTitle(value: string) {
    console.log(`name changed \nfrom '${this.name}' \nto '${value}'`);
    this.name = value;
  }
}
