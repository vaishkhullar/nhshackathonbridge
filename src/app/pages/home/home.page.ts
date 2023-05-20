import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private navCtrl: NavController) {}

  public async login() {
    await this.navCtrl.navigateRoot(['login']);
  }
  public async clinical() {
    await this.navCtrl.navigateRoot(['clinical']);
  }
}
