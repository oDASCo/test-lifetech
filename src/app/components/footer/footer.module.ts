
import { NgModule } from '@angular/core';
import {FooterComponent} from "./footer.component";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
