import { Component, OnInit } from '@angular/core';
import { toastController } from '@ionic/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openToast = async () => {
    const toast = await toastController.create({
      color: 'dark',
      duration: 2000,
      message: 'Paired successfully',
      buttons: [{
        text: 'Close',
        role: 'cancel'
      }]
    });

    toast.present();
  }
}
