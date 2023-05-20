import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

//Models
import { PatientStatus } from './models/patient-status.model';

//Services
import { PatientStatusAPIService } from './services/api/patient-status.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  public patientStatus: PatientStatus = null;

  constructor(private patientStatusAPI: PatientStatusAPIService) {}

  ngOnInit() {
    console.log('Test');
    this.fetchPatientStatusInformation(35);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  public async fetchPatientStatusInformation(patientId: number) {
    const patientStatusSub = this.patientStatusAPI
      .getPatientStatus(patientId)
      .subscribe((patientStatus: PatientStatus[]) => {
        if (patientStatus && patientStatus.length > 0) {
          this.patientStatus = patientStatus[0];
        }
      });
    if (!this.subscriptions.includes(patientStatusSub))
      this.subscriptions.push(patientStatusSub);
  }
}
