import { AuthGuardService } from '@ado-bcp-ui/auth-guards';
import { SharedService } from '@ado-bcp-ui/shared-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'ado-bcp-ui-login',
  template: ``,
  styles: [],
})
export class LoginComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  userDetails!: any;

  constructor(
    private sharedService: SharedService,
    private msalService: MsalService,
    private router: Router,
    private authGuardService: AuthGuardService
  ) {}

  ngOnInit() {
    this.msalService.instance.handleRedirectPromise().then((res) => {
      if (res != null && res.account != null) {
        this.userDetails = res.account;
        this.msalService.instance.setActiveAccount(res.account);
        localStorage.setItem('userDetails', this.userDetails);
        this.sharedService.event.next(this.userDetails);
        this.authGuardService.login(this.userDetails);
        console.log(this.sharedService.event);
        this.router.navigate(['/ado-vault.backup']);
      } else {
        localStorage.setItem('userDetails', 'undefined');
        this.msalService.loginRedirect();
      }
    });
  }
}
