import { Component } from '@angular/core';
import { InputField } from "../../components/input-field/input-field";
import { StdBtn } from "../../../../shared/components/std-btn/std-btn";
import { Navbar } from "../../../../layout/navbar/navbar";

@Component({
  selector: 'app-add-identity',
  imports: [InputField, StdBtn, Navbar],
  templateUrl: './add-identity.html',
  styleUrl: './add-identity.css',
})
export class AddIdentity {}
