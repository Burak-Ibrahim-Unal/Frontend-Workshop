import { Card } from './../models/card';
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
  cards: Card[];

  constructor(
    private cardService: CardService,
    public dialog: MatDialog,

  ) { }

  ngOnInit(): void {
    this.getCards();
  }

  addCard(): void {
    const dialogMessage = this.dialog.open(CardAddComponent, {
      width: "500px"
    });
    dialogMessage.afterClosed().subscribe(res => {
      console.log(res);
    })
  }

  getCards(): void {
    this.cardService.getCards().subscribe(response => {
      console.log(response);
      this.cards = response;
    })
  }
}
