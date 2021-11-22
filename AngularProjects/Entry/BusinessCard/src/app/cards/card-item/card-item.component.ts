import { Card } from './../../models/card';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  @Input() card: Card; // if strict is true in tsconfig.ts file,this line must be @Input() card!: Card;  --dont forget !
  constructor() { }

  ngOnInit(): void {
  }

}
