import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { map, tap, Observable } from 'rxjs';
import { AuthGuardService } from './auth-guards.service';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
//import {LoginModule} from '@maritech/login';

@Injectable({
  providedIn: 'root',
})
export class AuthGuards implements CanActivate {
  constructor(private authGuardService: AuthGuardService, private router: Router) {
    this.authGuardService.activeUser.subscribe(x =>console.log("guards",x));
    
  }
canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      console.log
    return this.authGuardService.activeUser.pipe(
      map((activeUser) => Boolean(activeUser)),
      tap((isLoggedIn) => {
        if (!isLoggedIn) {
          this.router.navigateByUrl('/');
        }
      })
    );
  }
}
