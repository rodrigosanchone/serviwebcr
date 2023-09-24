import { Component } from '@angular/core';

import { BlogService } from 'src/app/services/blog.service';
import { Articulo } from 'src/app/Models/articulo.model';


// Importar el archivo TS de configuración de swiper


// Asignar el objeto config a una variable de tipo SwiperConfigInterface



@Component({
  selector: 'app-banner-blog',
  templateUrl: './banner-blog.component.html',
  styleUrls: ['./banner-blog.component.css'],
  
})
export class BannerBlogComponent {



  articulos!:Articulo[];
  constructor(private blogServices: BlogService){}
  ngOnInit(){
    
    this.blogServices.getArticles().subscribe(
      articulos=>{
        this.articulos= articulos;
        console.log(articulos)
      }
    )
  }
}
