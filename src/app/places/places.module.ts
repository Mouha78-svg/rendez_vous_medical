import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacesPageRoutingModule } from './places-routing.module';

import { PlacesPage } from './places.page';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, PlacesPageRoutingModule],
  declarations: [PlacesPage],
})
export class PlacesPageModule {}
