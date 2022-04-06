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
  goBadge() {
    this.router.navigate(['component/badge']);
  }
  goButton() {
    this.router.navigate(['component/button']);
  }
  goCard() {
    this.router.navigate(['component/card']);
  }
  goCheckbox() {
    this.router.navigate(['component/checkbox']);
  }
  goChip() {
    this.router.navigate(['component/chip']);
  }
  goFab() {
    this.router.navigate(['component/fab']);
  }
  goGrid() {
    this.router.navigate(['component/grid']);
  }
  goItem() {
    this.router.navigate(['component/item']);
  }
  goItemGroup() {
    this.router.navigate(['component/item-group']);
  }
  goList() {
    this.router.navigate(['component/list']);
  }
  goNav() {
    this.router.navigate(['component/nav']);
  }
  goNote() {
    this.router.navigate(['component/note']);
  }
  goProgress() {
    this.router.navigate(['component/progress']);
  }
  goRadio() {
    this.router.navigate(['component/radio']);
  }
  goRange() {
    this.router.navigate(['component/range']);
  }
  goSelect() {
    this.router.navigate(['component/select']);
  }
}
