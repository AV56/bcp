import { Component, Input } from '@angular/core';

@Component({
  selector: 'ado-bcp-ui-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() from = '';
}
