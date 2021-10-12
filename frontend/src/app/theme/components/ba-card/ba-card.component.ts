import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ba-card',
  templateUrl: './ba-card.component.html',
  styleUrls: ['./ba-card.component.scss']
})
export class BaCardComponent implements OnInit {
  @Input() title:any;
  @Input() baCardClass:any;
  @Input() cardType:any;
  constructor() { }

  ngOnInit(): void {
  }

}
