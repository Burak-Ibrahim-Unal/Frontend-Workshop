import { CardAddComponent } from './../card-add/card-add.component';
import { MatDialog } from '@angular/material/dialog';
import { Card } from './../../models/card';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  @Input() card: Card; // if strict is true in tsconfig.ts file,this line must be @Input() card!: Card;  --dont forget !
  constructor(
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openCardUpdate(card: Card): void {
    this.matDialog.open(CardAddComponent, {
      width: "500px",
      data: card, //we can also use this.card at @input without parameter
    });
  }
}
