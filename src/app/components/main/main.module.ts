import { NgModule } from '@angular/core';
import {MainComponent} from "./main.component";
import {CardsBlockComponent} from "./cards-block/cards-block.component";
import {InfoBlockComponent} from "./info-block/info-block.component";
import {CardComponent} from "./cards-block/card/card.component";
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    MainComponent,
    CardsBlockComponent,
    CardComponent,
    InfoBlockComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    MainComponent,
    CardsBlockComponent,
    CardComponent,
    InfoBlockComponent
  ]
})
export class MainModule { }
