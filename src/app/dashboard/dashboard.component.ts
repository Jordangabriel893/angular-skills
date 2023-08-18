import { Component, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { CardService } from '../services/card.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  @Output() loading = new EventEmitter();
  cards: Array<any>;
  sub: Subscription[] = [];
  constructor(
    private cardService: CardService,
  ) { }

  ngOnInit() {
    this.getCards();

  }
  getCards() {
    this.sub.push(
      this.cardService.getCards().subscribe((item: Array<any>) => {
        this.cards = item;
        this.loading.emit(false)
      })
    )
  }
  onLike(card: any) {
    card.likes = card.likes + 1;
    this.sub.push(
      this.cardService.updateCard(card, card.id).subscribe(resp => {
        return resp
      })
    )
  }
  onShare(card) {
    window.open("https://www.linkedin.com/in/jordan-gabriel-26827a120", "_blank");

  }
  ngOnDestroy(): void {
    this.sub.forEach((s) => s.unsubscribe());
  }
}
