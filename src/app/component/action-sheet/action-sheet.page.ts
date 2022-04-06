import { Component, OnInit } from '@angular/core';
import { actionSheetController, getMode } from '@ionic/core';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  // description = `The <b>Action Sheet</b> is a dialog that displays a set of options. It appears on
  // top of the app’s content, and must be manually dismissed by the user before they can
  // resume interaction with the app. There are multiple ways to dismiss the action sheet,
  // including tapping the backdrop or hitting the escape key.`;
  // url = 'action-sheet';

  constructor() { }

  ngOnInit() {
  }

  mode!: string;

  open = async () => {
    console.log("open");
    const mode = getMode();

    const actionSheet = await actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: mode !== 'ios' ? 'trash-outline' : null,
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: mode !== 'ios' ? 'share-outline' : null,
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: mode !== 'ios' ? 'play-circle-outline' : null,
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: mode !== 'ios' ? 'heart-outline' : null,
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: mode !== 'ios' ? 'close' : null,
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
