import { Component,  } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

   cerrar() {
    if (typeof document !== 'undefined') {
      let navbar = document.querySelector(".navbar-toggler") as HTMLButtonElement;
    }
    let navbar = document.querySelector(".navbar-toggler") as HTMLButtonElement;
    navbar!.click();
  }

  rutaActual: string="";

  constructor(private router: Router, private aR: ActivatedRoute) {
    this.router.events.subscribe((val) => {
      if (this.router.url === '/blog') {
        this.rutaActual = 'blog';
      } else {
        this.rutaActual = 'otraRuta';
      }
    });
    this.aR.fragment.subscribe((value)=>{
      this.jumpTo(value)
    }
    )

  }

  jumpTo(section:any){
     document.getElementById(section)?.scrollIntoView({behavior:'smooth'})
  }
}

