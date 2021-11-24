import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(
    @Inject("apiUrl") private apiUrl: string,
    private httpClient: HttpClient,
  ) { }

  getCards(): Observable<Card[]> {
    return this.httpClient.get<Card[]>(this.apiUrl + "/cards")
  }

  addCard(card: Card): Observable<any> {
    return this.httpClient.post(this.apiUrl + "/cards", card);
  }
  updateCard(card: Card, cardId: number): Observable<any> {
    return this.httpClient.put(this.apiUrl + "/cards/" + cardId, card);
  }
}
