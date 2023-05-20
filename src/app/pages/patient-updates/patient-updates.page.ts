import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

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
  public accordianData: {date: Date, updates: PatientStatus[]}[] = [];

  constructor(private patientStatusAPI: PatientStatusAPIService) {}

  ngOnInit() {
    this.fetchPatientStatusInformation(environment.patientId);
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
          console.log("patientUpdates",this.patientUpdates);
          console.log("accordianData",this.accordianData);
        }
      });
    if (!this.subscriptions.includes(patientStatusSub))
      this.subscriptions.push(patientStatusSub);
  }

  private processUpdatesIntoAccordian(){
    for (let i = 0; i < this.patientUpdates.length; i++) {
      const patientStatus : PatientStatus = this.patientUpdates[i];
      const index = this.accordianData.findIndex(e => e.date === patientStatus.timestamp);
      if(index){
        this.accordianData[index].updates.push(patientStatus)
      }
      else{
        this.accordianData.push({date: patientStatus.timestamp, updates: [patientStatus]})
      }
    }
  }
}
