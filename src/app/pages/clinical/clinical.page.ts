import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { PatientAPIService } from '../../services/api/patient.service';
import { PatientInfo } from '../../models/patient-status.model';

// import { PatientStatusAPIService } from 'src/app/services/api/patient-status.service';

@Component({
  selector: 'app-clinical',
  templateUrl: './clinical.page.html',
  styleUrls: ['./clinical.page.scss'],
})
export class ClinicalPage implements OnInit {
  public clinicianForm: FormGroup;
  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private alertCtrl: AlertController,
    private patientAPI: PatientAPIService
  ) {
    this.clinicianForm = this.formBuilder.group({
      date: ['', Validators.compose([Validators.required])],
      mood: ['', Validators.compose([Validators.required])],
      food: ['', Validators.compose([Validators.required])],
      drinking: ['', Validators.compose([Validators.required])],
      toilet: ['', Validators.compose([Validators.required])],
      mobility: ['', Validators.compose([Validators.required])],
      message: [''],
    });
  }

  public async clinical() {
    await this.navCtrl.navigateRoot(['forward']);
  }

  ngOnInit() {
    const patientStatusSub = this.patientAPI
      .getPatientInfo(1)
      .subscribe((patientInfo: PatientInfo[]) => {
        if (patientInfo && patientInfo.length > 0) {
          // this.patientUpdates = patientStatus;
          // this.processUpdatesIntoAccordian();
          console.log(patientInfo);
        }
      });
  }
}
