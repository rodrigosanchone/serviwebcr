import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Servicio } from '../Models/servicio.model';


@Injectable()
export class ProductsService {
  coleccion: AngularFirestoreCollection<Servicio>;
  doc!: AngularFirestoreDocument<Servicio>;
  servicio!: Observable<Servicio[]>
  constructor(private db: AngularFirestore) { 
    this.coleccion= db.collection('servicios',ref=>ref.orderBy('nombre','asc'))
    
  }


getServicios():Observable<Servicio[]>{

  
  this.servicio = this.coleccion.snapshotChanges().pipe(
    map(cambios=>{
      return cambios.map(accion=>{
        const datos = accion.payload.doc.data() as Servicio;
        datos.id = accion.payload.doc.id;
          return datos
         
      }) 
    })
  )

   return this.servicio
   
}

}