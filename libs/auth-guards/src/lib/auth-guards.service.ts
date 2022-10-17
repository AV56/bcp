import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {  } from '@ado-bcp-ui/login';
import { SharedService } from '@ado-bcp-ui/shared-service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  private _activeUser = new BehaviorSubject<{ username: string } | undefined>(
    undefined
  );

  activeUser = this._activeUser.asObservable();

  constructor(private sharedService: SharedService) {
    console.log(this.activeUser);
    console.log(localStorage.getItem('userDetails'));
    if (localStorage.getItem('userDetails') != undefined)
      this._activeUser.next({
        username: localStorage.getItem('userDetails') as string,
      });
    else this._activeUser.next(undefined);
  }
  authDetails: any;

  login({ username }: { username: string }) {
    this.sharedService.event.subscribe((msg: any) => {
      this.authDetails = msg;
      this._activeUser.next({ username: msg });
      console.log('Login Enter....');
    });
    if (this.authDetails === '' || this.authDetails == undefined) return false;
    else return true;
  }
}
