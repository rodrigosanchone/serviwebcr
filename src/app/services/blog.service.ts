import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Articulo } from '../Models/articulo.model';


@Injectable({
  providedIn: 'root',
})
export class BlogService {
  coleccion: AngularFirestoreCollection<Articulo>;
  doc!: AngularFirestoreDocument<Articulo>;
  articulo!: Observable<Articulo[]>
  constructor(private db: AngularFirestore) { 
    this.coleccion= db.collection('articulos',ref=>ref.orderBy('titulo','asc'))
    
  }


getArticles():Observable<Articulo[]>{
  this.articulo= this.coleccion.snapshotChanges().pipe(
    map(cambios=>{
      return cambios.map(accion=>{
        const data = accion.payload.doc.data() as Articulo;
        data.id = accion.payload.doc.id;
          return data
         
      })
    })
  )
 
   return this.articulo
  

}


}