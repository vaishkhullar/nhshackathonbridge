import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

//Models
import { PatientStatus } from '../../models/patient-status.model';

//Services
import { PatientStatusAPIService } from '../../services/api/patient-status.service';

@Component({
  selector: 'app-patient-updates',
  templateUrl: './patient-updates.page.html',
  styleUrls: ['./patient-updates.page.scss'],
})
export class PatientUpdatesPage implements OnInit {
  private subscriptions: Subscription[] = [];
  public patientUpdates: PatientStatus[] = [];
  public accordianData: { date: Date; updates: PatientStatus[] }[] = [];

  constructor(private patientStatusAPI: PatientStatusAPIService) {}

  ngOnInit() {
    this.fetchPatientStatusInformation(1);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  public async fetchPatientStatusInformation(patientId: number) {
    const patientStatusSub = this.patientStatusAPI
      .getPatientStatus(patientId)
      .subscribe((patientStatus: PatientStatus[]) => {
        if (patientStatus && patientStatus.length > 0) {
          this.patientUpdates = patientStatus;
          this.processUpdatesIntoAccordian();
          console.log('patientUpdates', this.patientUpdates);
          console.log('accordianData', this.accordianData);
        }
      });
    if (!this.subscriptions.includes(patientStatusSub))
      this.subscriptions.push(patientStatusSub);
  }

  private processUpdatesIntoAccordian() {
    for (let i = 0; i < this.patientUpdates.length; i++) {
      const patientStatus: PatientStatus = this.patientUpdates[i];
      const index = this.accordianData.findIndex(
        (e) => {
          return new Date(e.date).getTime() == new Date(patientStatus.timestamp).getTime()
        }
      );
      if (index !== -1) {
        this.accordianData[index] = {
          date: new Date(patientStatus.timestamp),
          updates: [... this.accordianData[index].updates, patientStatus].sort((a, b)=> new Date(b.timestamp).getTime()-new Date(a.timestamp).getTime()),
        }
      } else {
        this.accordianData.push({
          date: new Date(patientStatus.timestamp),
          updates: [patientStatus],
        });
      }
    }
    this.accordianData.sort((a, b)=> new Date(b.date).getTime()-new Date(a.date).getTime())
  }
}
