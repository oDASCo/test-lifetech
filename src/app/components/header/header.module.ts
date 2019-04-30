import { NgModule } from '@angular/core';
import {HeaderComponent} from "./header.component";
import {NavComponent} from "./nav/nav.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [],
  exports: [
    HeaderComponent,
    NavComponent
  ]
})
export class HeaderModule { }
