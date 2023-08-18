import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private httpClient: HttpClient) { }

  getCards() {
    return this.httpClient.get('/api/skills');
  }
  updateCard(card, cardId) {
    return this.httpClient.put(`/api/skills/${cardId}`, card);
  }
}
