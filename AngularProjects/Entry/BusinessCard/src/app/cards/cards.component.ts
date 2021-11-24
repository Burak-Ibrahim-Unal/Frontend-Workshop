import { CardService } from './../services/card.service';
import { CardAddComponent } from './card-add/card-add.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor(
    public cardService: CardService,
    public dialog: MatDialog,

  ) { }

  ngOnInit(): void {
    this.cardService.getCards();
  }

  addCard(): void {
    this.dialog.open(CardAddComponent, {
      width: "500px"
    });
  }
}
