import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  collection: string;
  }

  
  const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Kasane Teto', collection: 'The Red one'},
  {position: 2, name: 'Hatsune Miku', collection: 'The Blue one'},
  {position: 3, name: 'Akita Neru', collection: 'The Yellow one'},
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
