import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs/internal/Subscription";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
