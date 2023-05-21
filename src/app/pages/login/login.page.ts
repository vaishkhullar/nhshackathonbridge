import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

const pasNOKData = {
  firstName: 'John',
  lastName: 'Smith',
  postcode: 'CF632NZ',
  telephone: '01234567891',
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
    private navCtrl: NavController,
    private loadingCtrl: LoadingController
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
    return (
      JSON.stringify(pasNOKData).toLowerCase() ===
      JSON.stringify(this.loginForm.value).toLowerCase()
    );
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Dismissing after 3 seconds...',
      duration: 3000,
    });

    loading.present();
  }

  public async moveToPatientUpdates() {
    const loading = await this.loadingCtrl.create({
      message: 'Checking...',
    });
    loading.present();
    if (!this.checkValidityFromPAS()) {
      const alert = await this.alertCtrl.create({
        message: `NOK details not found/correct`,
        buttons: ['OK'],
      });
      setTimeout(() => {
        loading.dismiss();
        alert.present();
      }, 2000);
    } else {
      setTimeout(() => {
        loading.dismiss();
        this.navCtrl.navigateRoot(['patient-updates']);
      }, 2000);
    }
  }
}
