import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private _bookings: Booking[] = [
    {
      id: 'xyz',
      placeId: 'p1',
      placeTitle: 'Suivi médical de routine',
      guessNumber: 2,
      userId: 'abc',
    },
  ];

  constructor() {}

  get bookings() {
    return [...this._bookings];
  }
}
