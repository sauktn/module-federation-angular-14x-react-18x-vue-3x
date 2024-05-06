import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  APP_INITIALIZER,
} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";

import {
  // loadRemoteModule,
  loadRemoteModuleExtend
} from '../app/utils/federation-utils';
// import { loadRemoteModule } from '@angular-architects/module-federation';
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

export function initializeApp(): () => void {
  // console.log('initializeApp');
  return () => {
    loadRemoteModuleExtend({
      remoteEntry: "http://localhost:3001/remoteEntry.js",
      remoteName: "react_profile_user",
      exposedModule: "./ProfileReactComponent",
    });
    loadRemoteModuleExtend({
      remoteEntry: "http://localhost:3002/remoteEntry.js",
      remoteName: "vue_settings_user",
      exposedModule: "./App",
      /*
        Shadown Root remotes to vue
        // exposedModule: "./App",
      */
    });
  };
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
    },
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA, // Added for custom elements support
  ],

  bootstrap: [AppComponent],
})
export class AppModule { }
