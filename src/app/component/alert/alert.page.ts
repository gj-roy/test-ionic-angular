import { Component, OnInit } from '@angular/core';
import { alertController } from '@ionic/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  open = async () => {
    const alert = await alertController.create({
      header: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the galaxy?',
      buttons: ['Disagree', 'Agree']
    });
    await alert.present();
  }

  async showAlert() {
    const alert = await alertController.create({
      header: 'Alert',
      subHeader: 'SubTitle',
      message: 'This is an alert message',
      buttons: ['OK']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }

  async showMultipleAlertButtons() {
    const alert = await alertController.create({
      header: 'MultipleButtonAlert',
      subHeader: 'SubTitle',
      message: 'This is an multiple button alert message',
      buttons: ['Cancel', 'Save', 'Open']
    });
    await alert.present();
  }

  async showPrompt() {
    const prompt = await alertController.create({
      header: 'Album',
      message: 'Enter a name for this new album',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1'
        },
        {
          name: 'name2',
          type: 'text',
          placeholder: 'Placeholder 2'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    await prompt.present();
  }

  async showRadio() {
    const alert = await alertController.create({
      inputs: [
        {
          name: 'radio 1',
          type: 'radio',
          label: 'Green',
          value: 'green',
          checked: true,
        },
        {
          name: 'radio 2',
          type: 'radio',
          label: 'Black',
          value: 'black',
        },
        {
          name: 'radio 3',
          type: 'radio',
          label: 'Red',
          value: 'red',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    await alert.present();
  }

  async showCheckBoxAlert() {
    const alert = await alertController.create({
      header: 'What is your favorite Programming Language?',
      inputs: [
        {
          name: 'checkbox 1',
          type: 'checkbox',
          label: 'Java',
          value: 'Java',
          checked: true,
        },
        {
          name: 'checkbox 2',
          type: 'checkbox',
          label: 'Android',
          value: 'Android',
        },
        {
          name: 'checkbox 3',
          type: 'checkbox',
          label: 'Python',
          value: 'Python',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    await alert.present();
  }
}
