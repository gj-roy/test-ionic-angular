import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  id: any;
  someData: any;

  constructor(private route: ActivatedRoute, private navController: NavController) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.someData = this.route.snapshot.paramMap.get('someData');
  }
  goBack() {
    this.navController.back();
  }
}
