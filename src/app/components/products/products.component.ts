import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Servicio } from 'src/app/Models/servicio.model';
import * as Aos from 'aos';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  servicios!:Servicio[];
  constructor(private productsServices: ProductsService){

  }

  ngOnInit(){
      this.productsServices.getServicios().subscribe(
        servicios=>{
          this.servicios= servicios;
        }
      )
      Aos.init();
  }
}


