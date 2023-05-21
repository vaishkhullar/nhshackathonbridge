import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { PatientAPIService } from '../../services/api/patient.service';
import { PatientInfo } from '../../models/patient-status.model';
import { format as formatDate } from 'date-fns';
import { PatientStatusAPIService } from '../../services/api/patient-status.service';

@Component({
  selector: 'app-clinical',
  templateUrl: './clinical.page.html',
  styleUrls: ['./clinical.page.scss'],
})
export class ClinicalPage implements OnInit {
  public clinicianForm: FormGroup;
  public myPatient: PatientInfo;

  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private alertCtrl: AlertController,
    private patientAPI: PatientAPIService,
    private patientWriteAPI: PatientStatusAPIService
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

  public formatDateAsString(date: Date, format?: string): string {
    if (date) {
      return formatDate(new Date(date), format ? format : 'dd/MM/yyyy');
    }
  }

  public async clinical() {
    await this.navCtrl.navigateRoot(['clinical']);
  }

  public async insertPatientStatus() {
    this.patientWriteAPI
      .insertPatientStatus(this.clinicianForm.value)
      .subscribe((patientInfo: any) => {
        // if (patientInfo && patientInfo.length > 0) {
        //   console.log(patientInfo[0]);
        //   this.myPatient = patientInfo[0];
        // }
        console.log(patientInfo);
      });
  }

  public async updateHappiness(e) {
    // console.log(e.target.value, 'hello');
    this.clinicianForm.patchValue({ mood: e.target.value });
  }

  ngOnInit() {
    const patientStatusSub = this.patientAPI
      .getPatientInfo(1)
      .subscribe((patientInfo: PatientInfo[]) => {
        if (patientInfo && patientInfo.length > 0) {
          console.log(patientInfo[0]);
          this.myPatient = patientInfo[0];
        }
      });
  }
}
