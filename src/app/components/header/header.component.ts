import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'test-life-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isNavOpen: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }
  toggleNav(){
    this.isNavOpen = !this.isNavOpen;
  }
}
