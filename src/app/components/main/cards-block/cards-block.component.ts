import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-life-cards-block',
  templateUrl: './cards-block.component.html',
  styleUrls: ['./cards-block.component.scss']
})
export class CardsBlockComponent{
  cards = new Array(4);
}
