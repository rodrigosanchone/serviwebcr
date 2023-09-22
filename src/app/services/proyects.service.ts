import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Proyecto } from '../Models/proyecto.model';
@Injectable({
  providedIn: 'root',
})
export class ProyectsService {
  coleccion: AngularFirestoreCollection<Proyecto>;
  doc!: AngularFirestoreDocument<Proyecto>;
  proyecto!: Observable<Proyecto[]>;
  constructor(private db: AngularFirestore) {
    this.coleccion = db.collection('proyectos', (ref) =>
      ref.orderBy('nombre', 'asc').limitToLast(3)
    );
  }
  getProyectos(): Observable<Proyecto[]> {
    this.proyecto = this.coleccion.snapshotChanges().pipe(
      map(cambios => {
        return cambios.map(accion => {
          const data = accion.payload.doc.data() as Proyecto;
          data.id = accion.payload.doc.id;
          return data;
        });
      })
    )
    return this.proyecto
  }
}