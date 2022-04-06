import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.page.html',
  styleUrls: ['./accordion.page.scss'],
})
export class AccordionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  test() {
    alert("Clickkkkkkkkkkkkkkkk");
  }

  transportationTypes: string[] = ['bus', 'plane'];
  busSpecs: string[] = ['slow', "can't fly"];
  planeSpecs: string[] = ['fast', 'can fly'];

  currentList: string[] = this.transportationTypes;

  itemClicked(type): void {
    if (type === 'bus') {
      this.currentList = this.busSpecs;
    } else if (type === 'plane') {
      this.currentList = this.planeSpecs;
    } else {
      this.currentList = this.transportationTypes;
    }
  }
}
