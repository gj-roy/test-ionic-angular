import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.page.html',
  styleUrls: ['./reorder.page.scss'],
})
export class ReorderPage implements OnInit {

  listItems: any;

  constructor() {
    this.listItems = [
      'Roberts',
      'Peter',
      'Tiffany Waugh',
      'Sheila Bauch',
      'Diana Gerhold',
      'John Kuhn'
    ];
  }

  ngOnInit() {
  }

  onRenderItems(event) {
    console.log(`Moving item from ${event.detail.from} to ${event.detail.to}`);
    const draggedItem = this.listItems.splice(event.detail.from, 1)[0];
    this.listItems.splice(event.detail.to, 0, draggedItem);
    // this.listItems = reorderArray(this.listItems, event.detail.from, event.detail.to);  
    event.detail.complete();
  }

  getList() {
    console.table(this.listItems);
  }

}
