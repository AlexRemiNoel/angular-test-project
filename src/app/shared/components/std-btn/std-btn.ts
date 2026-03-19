import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-std-btn',
  imports: [],
  templateUrl: './std-btn.html',
  styleUrl: './std-btn.css',
})
export class StdBtn {

  @Input() routeTo?: string;
  constructor(private router: Router) {}

  handleClick() {
    if (this.routeTo) this.router.navigate([this.routeTo]);
  }


}
