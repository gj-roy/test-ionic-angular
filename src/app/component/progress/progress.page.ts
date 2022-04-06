import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  progressEl: HTMLIonProgressBarElement;

  increaseValue() {
    const value = this.progressEl.value;

    this.progressEl.value = value + .1;
  }

  getProgress(): number {
    // return this.progressEl.value
    return 0.2;
  }
}
