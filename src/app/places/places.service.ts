import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Suivi médical de routine',
      'Consultation pour le suivi de vos conditions chroniques, le renouvellement de vos ordonnances et la discussion de toute préoccupation de santé.',
      '/assets/images/accueil.png',
      299.5,
      new Date('2025-04-13'),
      new Date('2025-05-03')
    ),
    new Place(
      'p2',
      'Bilan de santé annuel',
      'Examen complet pour évaluer votre état de santé général, discuter de vos antécédents médicaux et planifier les mesures préventives.',
      '/assets/images/views-1.png',
      259.5,
      new Date('2025-04-13'),
      new Date('2025-05-03')
    ),
    new Place(
      'p3',
      'Consultation pour douleurs thoraciques',
      'Rendez-vous pour évaluer et diagnostiquer les causes de vos douleurs thoraciques.',
      '/assets/images/views-2.png',
      244.5,
      new Date('2025-04-13'),
      new Date('2025-05-03')
    ),
  ];

  get places() {
    return [...this._places];
  }

  constructor() {}
  getPlace(id: string) {
    return { ...this._places.find((p) => p.id === id) };
  }
}
