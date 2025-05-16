import { CUSTOM_ELEMENTS_SCHEMA, forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceDetailPageRoutingModule } from './place-detail-routing.module';

import { PlaceDetailPage } from './place-detail.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    PlaceDetailPageRoutingModule,
  ],
  providers: [],
  declarations: [PlaceDetailPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PlaceDetailPageModule {}
