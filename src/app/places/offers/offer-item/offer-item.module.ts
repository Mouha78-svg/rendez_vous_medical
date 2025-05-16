import { BrowserModule } from '@angular/platform-browser';
import { OfferItemComponent } from './offer-item.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { OfferBookingsPageModule } from '../offer-bookings/offer-bookings.module';
import { RouteReuseStrategy } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

@NgModule({
  declarations: [OfferItemComponent],
  imports: [BrowserModule, IonicModule.forRoot(), OfferBookingsPageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [OfferItemComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OfferItemModule {}
