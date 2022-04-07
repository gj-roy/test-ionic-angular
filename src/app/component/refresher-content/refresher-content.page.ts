import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher-content',
  templateUrl: './refresher-content.page.html',
  styleUrls: ['./refresher-content.page.scss'],
})
export class RefresherContentPage implements OnInit {

  dummyList: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  doRefresh(event) {
    console.log('Pull Event Triggered!');
    setTimeout(() => {
      this.dummyList = Array(30);
      event.target.complete();
    }, 2000);
  }
}
