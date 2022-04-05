import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  go123() {
    this.router.navigate(['animals']);
  }

  go1234() {
    this.router.navigate(['animals/someid-by-navigate']);
  }

  goAndPassData(data: string) {
    this.router.navigate(['animals/goAndPassData', { someData: data }]);
  }
}
