import { Card } from './../../models/card';
import { CardService } from './../../services/card.service';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.scss']
})
export class CardAddComponent implements OnInit {
  cardForm: FormGroup;
  showSpinners: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private cardService: CardService,
    private dialogRef: MatDialogRef<CardAddComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: Card
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    this.cardForm = this.formBuilder.group({
      name: [this.data?.name || "", Validators.maxLength(255)],
      title: [this.data?.title || "", [Validators.required, Validators.maxLength(50)]],
      email: [this.data?.email || "", [Validators.email, Validators.maxLength(50)]],
      address: [this.data?.address || "", Validators.maxLength(255)],
      phone: [this.data?.phone || "", [Validators.required, Validators.maxLength(20)]],
    });
  }

  addCard(): void {
    //console.log(this.cardForm.value);
    this.showSpinners = true;
    this.cardService.addCard(this.cardForm.value).subscribe((response: any) => {
      //console.log(response);
      this.snackBar.open(response || "Card added successfuly", "", {
        duration: 3000,
      });
      this.cardService.getCards();
      this.showSpinners = false;
      this.dialogRef.close(true);
    });
  }

  updateCard(): void {
    this.showSpinners = true;
    this.cardService.updateCard(this.cardForm.value, this.data.id).subscribe((response: any) => {
      //console.log(response);
      this.snackBar.open(response || "Card updated successfuly", "", {
        duration: 3000,
      });
      this.cardService.getCards();
      this.showSpinners = false;
      this.dialogRef.close(true);
    });
  }

  deleteCard(): void {
    this.showSpinners = true;
    this.cardService.deleteCard(this.data.id).subscribe((response: any) => {
      //console.log(response);
      this.snackBar.open(response || "Card deleted successfuly", "", {
        duration: 3000,
      });
      this.cardService.getCards();
      this.showSpinners = false;
      this.dialogRef.close(true);
    });
  }

}
