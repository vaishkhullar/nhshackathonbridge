import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { AppComponent } from "./app.component";

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

//Pages
import { HomePage } from "./pages/home/home.page";
import { LoginPage } from "./pages/login/login.page";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent,HomePage, LoginPage],
  bootstrap: [AppComponent],
})
export class AppModule {}
