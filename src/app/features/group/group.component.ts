import { Component } from '@angular/core';
import GroupSubComponent from '@features/group/group-sub';

type GroupData = {
  id: string;
  name: string;
  src: string;
};

@Component({
  selector: 'app-group',
  standalone: true,
  templateUrl: './group.component.html',
  styleUrl: './group.component.scss',
  imports: [GroupSubComponent],
})
export class GroupComponent {
  data: GroupData[] = [];

  generate(name: string) {
    console.log('Generating group...');

    // random id generator between 0 and 1084
    const randomPic = Math.floor(Math.random() * 1084);

    this.data.push({
      name: name.trim(),
      id: Math.random().toString(36).substring(7),
      src: `https://picsum.photos/id/${randomPic}/100`,
    });
  }

  deleteItem(item: GroupData) {
    this.data = this.data.filter((i) => i.id !== item.id);
  }

  trackItem() {
    return Math.random().toString(36).substring(7);
  }
}
