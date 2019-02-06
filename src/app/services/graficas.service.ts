import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  items: Observable<any>;

  constructor(public db: AngularFirestore) {
  }

  dameBasuras() {
    return this.items = this.db.collection('basuras').valueChanges();
  }
}
