import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-life-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent{
  isNavOpen: boolean = false;
  toggleNav(){
    this.isNavOpen = !this.isNavOpen;
  }
}
