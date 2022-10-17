import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { SharedService } from '@ado-bcp-ui/shared-service';
@Component({
  selector: 'ado-bcp-ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  dropdownOpen = false;

  headerDetails: any = {};
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private sharedService: SharedService,
    private router: Router,private msalService: MsalService,
  ) {
    this.sharedService.event.subscribe((msg: any) => (this.headerDetails = msg));
  }

  sidebarToggle() {
    //toggle sidebar function
    this.document.body.classList.toggle('toggle-sidebar');
  }

  logout() {
    localStorage.removeItem("userDetails");
    this.msalService.logout();
  }
}
