import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { IUser } from "../models/user";

@Injectable({
  providedIn: "root",
})
export class ProfileUserService {

  private currentUserSubject = new BehaviorSubject<IUser>({
    name: "John",
    email: "john.dou123@gmail.com",
  });

  public currentUser$: Observable<IUser> = this.currentUserSubject.asObservable();

  constructor() {}

  setNewCurrentUser(user: IUser) {
    this.currentUserSubject.next(user);
  }
}
