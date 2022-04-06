import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {

  @ViewChild(IonContent, { static: false }) content: IonContent;
  dummyList: any;

  constructor() {
    this.dummyList = [
      {
        value: 'Himanshu',
      }, {
        value: 'Anubhav',
      }, {
        value: 'Abhishek',
      }, {
        value: 'Akshita',
      }, {
        value: 'Haseena',
      }, {
        value: 'Anubhav',
      }, {
        value: 'Harshita',
      }, {
        value: 'Anisha',
      }, {
        value: 'Haseena',
      }, {
        value: 'Anubhav',
      }, {
        value: 'Abhishek',
      }, {
        value: 'Anisha',
      }, {
        value: 'Haseena',
      }, {
        value: 'Akshita',
      }, {
        value: 'Abhishek',
      }, {
        value: 'Akshita',
      }, {
        value: 'Jyotika',
      }, {
        value: 'Anubhav',
      }, {
        value: 'Abhishek',
      }, {
        value: 'Anisha',
      }, {
        value: 'Haseena',
      }, {
        value: 'Anubhav',
      }, {
        value: 'Abhishek',
      }
    ];
  }

  ngOnInit() {
  }

  logScrollStart() {
    console.log('logScrollStart : When Scroll Starts');
  }

  logScrolling() {
    console.log('logScrolling : When Scrolling');
  }

  logScrollEnd() {
    console.log('logScrollEnd : When Scroll Ends');
  }

  ScrollToBottom() {
    this.content.scrollToBottom(1500);
  }

  ScrollToTop() {
    this.content.scrollToTop(1500);
  }

  ScrollToPoint(X, Y) {
    this.content.scrollToPoint(X, Y, 1500);
  }
}
