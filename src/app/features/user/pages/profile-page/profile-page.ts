import { Component } from '@angular/core';
import { Navbar } from "../../../../layout/navbar/navbar";
import { MatIcon } from "@angular/material/icon";
import { ProfilInfo } from '../../components/profile-info/profil-info';
import { StdBtn } from "../../../../shared/components/std-btn/std-btn";

@Component({
  selector: 'app-profile-page',
  imports: [Navbar, MatIcon, ProfilInfo, StdBtn],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.css',
})
export class ProfilePage {}
