import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

// import { PatientStatusAPIService } from 'src/app/services/api/patient-status.service';

@Component({
  selector: 'app-clinical',
  templateUrl: './clinical.page.html',
  styleUrls: ['./clinical.page.scss'],
})
export class ClinicalPage {
  public clinicianForm: FormGroup;
  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private alertCtrl: AlertController
  ) {
    this.clinicianForm = this.formBuilder.group({
      date: ['', Validators.compose([Validators.required])],
      mood: ['', Validators.compose([Validators.required])],
    });
  }

  public async clinical() {
    await this.navCtrl.navigateRoot(['forward']);
  }
}
