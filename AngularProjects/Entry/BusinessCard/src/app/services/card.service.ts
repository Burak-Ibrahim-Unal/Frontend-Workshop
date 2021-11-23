import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getCards() {
    return this.httpClient.get("http://demo.limantech.com/cards/public/api/cards")
  }

}
