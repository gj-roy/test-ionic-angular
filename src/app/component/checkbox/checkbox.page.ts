import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public form = [
    { val: 'Pok?mon Yellow', isChecked: false },
    { val: 'Super Metroid', isChecked: true },
    { val: 'Mega Man X', isChecked: false },
    { val: 'Spider Man', isChecked: true }
  ];
}
