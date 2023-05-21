import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

const pasNOKData = {
  firstName: 'Nick',
  lastName: 'Rees',
  postcode: 'CF63 2NZ',
  telephone: '07748981774',
};

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //Form Related
  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private alertCtrl: AlertController,
    private navCtrl: NavController
  ) {
    this.loginForm = this.formBuilder.group({
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      postcode: ['', Validators.compose([Validators.required])],
      telephone: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {}

  public checkValidityFromPAS(): boolean {
    return JSON.stringify(pasNOKData) === JSON.stringify(this.loginForm.value);
  }

  public async moveToPatientUpdates() {
    if (!this.checkValidityFromPAS()) {
      const alert = await this.alertCtrl.create({
        message: `NOK details not found/correct`,
        buttons: ['OK'],
      });
      await alert.present();
    } else {
      await this.navCtrl.navigateRoot(['patient-updates']);
    }
  }
}
