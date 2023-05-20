import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ward',
  templateUrl: 'ward.page.html',
  styleUrls: ['ward.page.scss'],
})
export class WardPage {
  constructor(private navCtrl: NavController) {}

  public async ward() {
    await this.navCtrl.navigateRoot(['ward']);
  }
}
