import { CardService } from './../../services/card.service';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.scss']
})
export class CardAddComponent implements OnInit {
  cardForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private cardService: CardService,
    private dialogRef: MatDialogRef<CardAddComponent>,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.cardForm = this.formBuilder.group({
      name: ["", Validators.maxLength(255)],
      title: ["", [Validators.required, Validators.maxLength(50)]],
      email: ["", [Validators.email, Validators.maxLength(50)]],
      address: ["", Validators.maxLength(255)],
      phone: ["", [Validators.required, Validators.maxLength(20)]],
    });
  }

  addCard(): void {
    console.log(this.cardForm.value);
    this.cardService.addCard(this.cardForm.value).subscribe(response => {
      console.log(response);
      this.snackBar.open(response.toString() || "Card added successfuly", "", {
        duration: 3000
      });
      this.dialogRef.close();
    });
  }

}
