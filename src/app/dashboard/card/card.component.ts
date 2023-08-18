import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card;
  constructor() { }

  ngOnInit() {
  }

  onShare(card: any) {
    // TODO: abrir o link do seu linkedin
    window.location.href = 'www.linkedin.com/in/jordan-gabriel-26827a120'

  }

}
