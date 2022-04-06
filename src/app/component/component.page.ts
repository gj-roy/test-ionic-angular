import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component',
  templateUrl: './component.page.html',
  styleUrls: ['./component.page.scss'],
})
export class ComponentPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goAccordion() {
    this.router.navigate(['component/accordion']);
  }
  goActionSheet() {
    this.router.navigate(['component/action-sheet']);
  }
  goAlert() {
    this.router.navigate(['component/alert']);
  }
  goAvatar() {
    this.router.navigate(['component/avatar']);
  }
}
