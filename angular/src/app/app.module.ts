import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,

} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";


const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./layout/layout.component").then((m) => m.LayoutComponent),
  },
  {
    path: "profile-user",
    loadComponent: () => import("./profile-user/profile-user.component").then((m) => m.ProfileUserComponent),
  },
  {
    path: "settings",
    loadComponent: () => import("./settings/settings.component").then((m) => m.SettingsComponent),
  },
];



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA, // Added for custom elements support
  ],

  bootstrap: [AppComponent],
})
export class AppModule { }
