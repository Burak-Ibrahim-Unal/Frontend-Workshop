import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cardItem = {
    title: "FullStack .Net Developer",
    name: "Burak İbrahim Ünal",
    phone: "+905452100131",
    email: "burakibrahim@gmail.com",
    address: "Mamak/Ankara",
  }
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

}
