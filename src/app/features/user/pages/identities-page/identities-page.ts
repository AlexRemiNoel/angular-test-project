import { Component } from '@angular/core';
import { Navbar } from "../../../../layout/navbar/navbar";
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
  selector: 'app-identities-page',
  imports: [Navbar, MatTableModule],
  templateUrl: './identities-page.html',
  styleUrl: './identities-page.css',
})



export class IdentitiesPage {

  displayedColumns: string[] = ['position','name', 'collection'];
  dataSource = ELEMENT_DATA;



}
