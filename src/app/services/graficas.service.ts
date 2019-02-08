import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Basura } from '../interface/basura.interface';


@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  items: Observable<any>;
  private itemsCollection: AngularFirestoreCollection<Basura>;
  public basuras: Basura[] = [];
  public data: any[] = [];
  public historico: any[] = [];

  constructor(public db: AngularFirestore) {
  }

  dameHistoricoPorBasura( nombreBasura: string ) {

    return this.db.collection('historicos', ref => ref.where('nombre', '==', nombreBasura ))
                  .snapshotChanges()
                  .subscribe( (historicoSnapshot) => {
                    this.historico = historicoSnapshot.map( (basura: any) => {
                      return {
                        nombre: basura.payload.doc.data().nombre,
                        calificacion: basura.payload.doc.data().calificacion,
                        fecha: basura.payload.doc.data().fecha,
                        img: basura.payload.doc.data().img,
                        zona: basura.payload.doc.data().zona,
                        observaciones: basura.payload.doc.data().observaciones,
                        llenado: basura.payload.doc.data().llenado,
                        estado: basura.payload.doc.data().estado,
                        key: basura.payload.doc.id
                      };
                    });


                  });
  }

  dameBasuras() {
    return this.items = this.db.collection('basuras').valueChanges();
  }

  dameBasurasDeZona( zona: string ) {
    this.itemsCollection = this.db.collection<Basura>('basuras', ref => ref.where('zona', '==', zona));
    return  this.itemsCollection.snapshotChanges()
                                .subscribe( (basurasSnapshot) => {
                                  this.data = basurasSnapshot.map( (basura: any) => {
                                    return {
                                      labels: [ 'Semana 1', 'Semana 2', 'Semana 3', 'Semana 4' ],
                                      data: [
                                        { data: basura.payload.doc.data().calificacion,
                                          label: basura.payload.doc.data().nombre }
                                      ],
                                      leyenda: basura.payload.doc.data().zona
                                    };
                                    /* return {
                                      nombre: basura.payload.doc.data().nombre,
                                      calificacion: basura.payload.doc.data().calificacion,
                                      fecha: basura.payload.doc.data().fecha,
                                      img: basura.payload.doc.data().img,
                                      zona: basura.payload.doc.data().zona,
                                      observaciones: basura.payload.doc.data().observaciones,
                                      llenado: basura.payload.doc.data().llenado,
                                      estado: basura.payload.doc.data().estado,
                                      key: basura.payload.doc.id
                                    }; */
                                  });

                                });
  }

}
