import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  createSnackBar(type: string,response: string, duration: number = 5000) {
    this.snackBar.open(response, "", {
      duration,
      panelClass: type,
    });
  }
}
