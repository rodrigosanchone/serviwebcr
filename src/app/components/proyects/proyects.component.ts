import { Component } from '@angular/core';
import { ProyectsService } from 'src/app/services/proyects.service';
import {Proyecto} from 'src/app/Models/proyecto.model'
@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent {
   proyectos!:Proyecto[];
   constructor(private proyectsServices:ProyectsService){}
   ngOnInit(){
    this.proyectsServices.getProyectos().subscribe(
      proyectos=>{
        this.proyectos= proyectos;
      }
    )
   }
} 
