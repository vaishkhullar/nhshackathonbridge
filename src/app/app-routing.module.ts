import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

//Pages
import { HomePage } from "./pages/home/home.page";
import { LoginPage } from "./pages/login/login.page";
import { PatientUpdatesPage } from "./pages/patient-updates/patient-updates.page";

const routes: Routes = [
  {
    path: "home",
    component: HomePage,
  },
  {
    path: "login",
    component: LoginPage,
  },
  {
    path: "patient-updates",
    component: PatientUpdatesPage,
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: "page-not-found",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
