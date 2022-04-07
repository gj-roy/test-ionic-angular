import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loaderToShow: any;

  constructor(public loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  showLoading() {
    this.loadingCtrl.create({
      message: 'Loading...'
    }).then((loading) => {
      loading.present();

      setTimeout(() => {
        loading.dismiss();
      }, 5000);
    });
  }

  show() {
    this.loaderToShow = this.loadingCtrl.create({
      message: 'This Loader will Not AutoHide'
    }).then((res) => {
      res.present();

      res.onDidDismiss().then((dis) => {
        console.log('Loading dismissed!');
      });

      setTimeout(() => {
        this.hide();
      }, 2000);
    });
  }

  hide() {
    this.loadingCtrl.dismiss();
  }

}
