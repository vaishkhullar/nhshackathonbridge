import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-patient-updates",
  templateUrl: "./patient-updates.page.html",
  styleUrls: ["./patient-updates.page.scss"],
})
export class PatientUpdatesPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}
}
