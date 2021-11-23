import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CardItemComponent } from './card-item/card-item.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CardAddComponent } from './card-add/card-add.component';
import { MatInputModule } from '@angular/material/input';





@NgModule({
  declarations: [
    CardsComponent,
    CardItemComponent,
    CardAddComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
  ]
})
export class CardsModule { }
