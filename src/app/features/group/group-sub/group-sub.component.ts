import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-group-sub',
  standalone: true,
  templateUrl: './group-sub.component.html',
  styleUrl: './group-sub.component.scss',
  imports: [NgFor],
})
export class GroupSubComponent {
  items: string[] = [];

  addItem() {
    this.items.push(Math.floor(Math.random() * 1084).toString());
  }
}
