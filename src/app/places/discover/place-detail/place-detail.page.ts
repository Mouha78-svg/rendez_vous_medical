import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ActionSheetController,
  ModalController,
  NavController,
} from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
  standalone: false,
})
export class PlaceDetailPage implements OnInit {
  place: Place | any;
  constructor(
    private route: ActivatedRoute,
    private nvCTL: NavController,
    private placesServices: PlacesService,
    private modalCTL: ModalController,
    private actionSheetCTRL: ActionSheetController
  ) {}

  onBooked() {
    // this.nvCTL.navigateBack('/places/tabs/discover');
    this.actionSheetCTRL
      .create({
        header: 'Choisir une action',
        buttons: [
          {
            text: 'Choisir la date',
            handler: () => {
              this.openBookingMadal('Choisir');
            },
          },
          {
            text: 'Random Date',
            handler: () => {
              this.openBookingMadal('random');
            },
          },
          {
            text: 'Quitez',
            role: 'cancel',
          },
        ],
      })
      .then((actinSheetEL) => {
        actinSheetEL.present();
      });
  }

  openBookingMadal(mode: 'Choisir' | 'random') {
    console.log(mode);
    this.modalCTL
      .create({
        component: CreateBookingComponent,
        componentProps: { selectedPlace: this.place, selectedMode: mode },
      })
      .then((modalEL) => {
        modalEL.present();
        return modalEL.onDidDismiss();
      })
      .then((resultData) => {
        console.log(resultData.data, resultData.role);
        if (resultData.role === 'confirmer') {
          console.log('Reserver...');
        }
      });
  }

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
