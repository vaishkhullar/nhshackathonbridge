import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

//Models
import { PatientStatus } from "src/app/models/patient-status.model";

//Services
import { PatientStatusAPIService } from "src/app/services/api/patient-status.service";

@Component({
  selector: "app-patient-updates",
  templateUrl: "./patient-updates.page.html",
  styleUrls: ["./patient-updates.page.scss"],
})
export class PatientUpdatesPage implements OnInit {
  private subscriptions: Subscription[] = [];
  public patientUpdates: PatientStatus[] = [];

  constructor(private patientStatusAPI: PatientStatusAPIService) {}

  ngOnInit() {
    console.log("Test");
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
          console.log(patientStatus);
          this.patientUpdates = patientStatus;
        }
      });
    if (!this.subscriptions.includes(patientStatusSub))
      this.subscriptions.push(patientStatusSub);
  }
}
