import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ProfileUserService } from "./profile-user/profile-user.service";
import { IUser } from "./models/user";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  currentUser$: Observable<IUser> = new Observable();

  constructor(private profileUserService: ProfileUserService) {
    // new Promise((resolve) => {
    //   resolve(this.loadScript('http://localhost:3001/remoteEntry.js'));
    //   resolve(this.loadScript('http://localhost:3002/remoteEntry.js'));
    // })
  }

  ngOnInit(): void {

    this.currentUser$ = this.profileUserService.currentUser$;
  }

  loadScript(url: string) {
    // const body = <HTMLDivElement>document.body;
    const head = <HTMLDivElement>document.head;
    const script = document.createElement('script');
    script.src = url;
    head.appendChild(script);
  }
}
