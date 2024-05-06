import {
  Input,
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
  OnDestroy,
  AfterViewInit,
  OnInit,
} from "@angular/core";

import * as React from "react_profile/react";
import * as ReactDom from "react_profile/react-dom/client";
export type Root = typeof ReactDom.Root;
export type ReactNode = typeof React.ReactNode;
import { createRoot } from "react_profile/react-dom/client";

import { IUser } from "../models/user";
import { ProfileUserService } from "./profile-user.service";
import { Subject, takeUntil } from "rxjs";

const containerElementName = "customReactComponentContainer";

@Component({
  standalone: true,
  selector: "app-profile-user",
  template: `<div style="margin: 35px">
    <h2 style="color: cadetblue">Profile (React Microfrontend)</h2>
        <div style="font-family: Inter, sans-serif; color: rgb(140, 137, 137, 1); font-size: 13px" >
        This user profile component is being remotely loaded into the application
        from React App using Webpack Module Federation
        </div>
    <span #${containerElementName}></span>
  </div>`,
  encapsulation: ViewEncapsulation.None,
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class ProfileUserComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() user: IUser = { name: null, email: null };

  @ViewChild(containerElementName, { static: true }) containerRef!: ElementRef;

  // root!: Root;
  root!: Root;

  private destroy$: Subject<void> = new Subject();

  constructor(private profileUserService: ProfileUserService) {
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
  }


  updateCurrentUser(user: IUser) {
    console.log(' -- Angular UpdateCurrent: ');
    console.log(user);
    this.profileUserService.setNewCurrentUser(user);
  }

  ngOnInit(): void {
    /*
     * Set default from Angular to React js
     */
    this.profileUserService.currentUser$.pipe(
      takeUntil(this.destroy$)
    ).subscribe((res: IUser) => {
      this.user = res;
    });


  }

  ngAfterViewInit() {
    this.root = createRoot(this.containerRef.nativeElement);
    this.root.render("Loading script... ");

    try {
      import("react_profile/ProfileReactComponent").then((module) => {

        const renderNode: ReactNode =
          React.createElement(
            module.ProfileReactComponent,
            {
              name: this.user?.name,
              email: this.user?.email,
              sendToRemoteApp: this.updateCurrentUser,
            }
          );
        this.root.render(renderNode);
      });
    } catch (error) {
      console.log("Erorr", error);
    }
  }

  ngOnDestroy() {
    // this.root.unmountComponentAtNode(this.containerRef.nativeElement);
    this.root.unmount();
    this.destroy$.next();
    this.destroy$.complete();
  }
}
