import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Navbar } from '../../../../layout/navbar/navbar';
import { IdentityTable } from "../../components/identity-table/identity-table";
import { StdBtn } from "../../../../shared/components/std-btn/std-btn";

@Component({
  selector: 'app-identities-page',
  imports: [Navbar, MatTableModule, IdentityTable, StdBtn],
  templateUrl: './identities-page.html',
  styleUrl: './identities-page.css',
})



export class IdentitiesPage {





}
