import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(librabry: FaIconLibrary , router: Router){ }

  onClick():void {
    // this.router.navigate(['products'])
  }
}
