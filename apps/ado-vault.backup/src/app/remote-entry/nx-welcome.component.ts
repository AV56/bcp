import { Component, OnInit, ViewEncapsulation } from '@angular/core';

/* eslint-disable */

@Component({
  selector: 'ado-bcp-ui-nx-welcome',
  template: `
    <ado-bcp-ui-sidebar></ado-bcp-ui-sidebar>
    <ado-bcp-ui-header></ado-bcp-ui-header>
    <ado-bcp-ui-table from="Welcome to Backup"></ado-bcp-ui-table>`,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
