import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ward',
  templateUrl: './ward.page.html',
  styleUrls: ['./ward.page.scss'],
})
export class WardPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    setTimeout(() => {
      this.navCtrl.navigateRoot(['patient-status'], { replaceUrl: true });
    }, 2000);
  }
}
