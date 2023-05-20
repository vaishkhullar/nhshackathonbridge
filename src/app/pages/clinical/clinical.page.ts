import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-clinical',
  templateUrl: 'clinical.page.html',
  styleUrls: ['clinical.page.scss'],
})
export class ClinicalPage {
  constructor(private navCtrl: NavController) {}

  public async login() {
    await this.navCtrl.navigateRoot(['login']);
  }
  public async clinical() {
    await this.navCtrl.navigateRoot(['clinical']);
  }
}
