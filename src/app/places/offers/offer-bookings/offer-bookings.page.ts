import { Component, OnInit } from '@angular/core';
import { Place } from '../../place.model';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
  standalone: false,
})
export class OfferBookingsPage implements OnInit {
  place: Place | any;
  // placeId!: string;
  constructor(
    private route: ActivatedRoute,
    private nvCTL: NavController,
    private placesServices: PlacesService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('placeId')) {
        this.nvCTL.navigateBack('places/tabs/offers');
        return;
      }
      this.place = this.placesServices.getPlace(paramMap.get('placeId')!);
    });
  }
}
