import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  collection: string;
  }

  
  const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', collection: 'Aqwe'},
  {position: 2, name: 'Hydrogen', collection: 'Aqwe'},
  {position: 3, name: 'Hydrogen', collection: 'Aqwe'},
  ];

@Component({
  selector: 'app-identity-table',
  imports:  [MatTableModule],
  templateUrl: './identity-table.html',
  styleUrl: './identity-table.css',
})
export class IdentityTable {
  displayedColumns: string[] = ['position','name', 'collection'];
  dataSource = ELEMENT_DATA;
}
