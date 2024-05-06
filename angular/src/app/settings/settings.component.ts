import {
  AfterViewInit,
  Component,
  ComponentRef,
  ElementRef,
  OnDestroy,
  Renderer2,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from "@angular/core";
import { Subject, fromEvent, takeUntil } from "rxjs";

import * as Vue from "vue_settings_user/vue";
import {
  createApp,
  // App
} from "vue_settings_user/vue";

export type App<T> = typeof Vue.App;

const containerVueElementName = "customVueComponentContainer";

@Component({
  standalone: true,
  selector: "app-settings",
  template: `<div style="margin: 35px">
    <h2 style="color: cadetblue">Settings (Vue Microfrontend)</h2>
        <div style="font-family: Inter, sans-serif; color: rgb(140, 137, 137, 1); font-size: 13px; margin-bottom: 15px" >
        This settings component is being remotely loaded into the application from
        Vue App using Webpack Module Federation
        </div>
    <div #${containerVueElementName}></div>
    <div>
       Vue Settings selected: {{selected}}
    </div>
  </div>`,
  encapsulation: ViewEncapsulation.None,
  // encapsulation: ViewEncapsulation.ShadowDom,
  // encapsulation: ViewEncapsulation.Emulated,
})
export class SettingsComponent implements AfterViewInit, OnDestroy {
  @ViewChild(containerVueElementName, { static: true }) containerVueRef!: ElementRef;
  @ViewChild(containerVueElementName, { read: ViewContainerRef })
  childContent!: ViewContainerRef;

  vueComRef = Array<ComponentRef<any>>();

  app!: App<Element>;
  // app!: any;

  #destroy$: Subject<void> = new Subject();

  selected: null | string = '';

  constructor(
    private renderer: Renderer2
  ) { }

  ngAfterViewInit() {
    try {
      /*
        Shadown Root remotes to vue
        // import("settings_user/App").then((module) => {
       */

      import("vue_settings_user/App").then((module) => {
        const app = createApp((module.default));
        app.mount(this.containerVueRef.nativeElement);
        this.app = app;
        fromEvent<CustomEvent<{ vueObj: null | string }>>(document, 'vueSendEvent')
          .pipe(
            takeUntil(this.#destroy$)
          ).subscribe({
            next: (next: any) => {
              this.selected = next?.detail?.vueObj;
            },
            error: (error: Error) => {
              console.error(error);
            },
            complete: () => {}
          })
      });
    } catch (error) {
      console.log("Erorr", error);
    }
  }


  ngOnDestroy(): void {
    this.renderer.destroy();
    this.app.unmount();
    this.#destroy$.next();
    this.#destroy$.complete();
  }
}
