import { Component, Input, OnInit } from '@angular/core';
import { Place } from '../../place.model';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss'],
  standalone: false,
})
export class OfferItemComponent implements OnInit {
  @Input() offer!: Place;
  constructor() {}

  ngOnInit() {}

  getDummyDate() {
    return new Date();
  }
}
